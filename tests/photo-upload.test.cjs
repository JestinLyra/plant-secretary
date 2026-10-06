// Run with: node --test tests/photo-upload.test.cjs
// Canvas mocks exercise encoder fallback logic; they are not an iPhone test.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const code=html.slice(html.indexOf('const PHOTO_MAX_SOURCE_BYTES='),html.indexOf('async function optimizeStoredPhotos'));
function setup(outputs,{width=1086,height=1448,storageError=null}={}){
 const calls=[],fills=[],saved=[],messages=[];let closed=0;
 const ctx={drawImage(){},save(){},restore(){},fillRect(...args){fills.push(args)}};
 const canvas={getContext:()=>ctx,toBlob(callback,type,quality){calls.push({type,quality});const result=outputs.shift();if(result instanceof Error)throw result;callback(result)}};
 const scope={Blob,URL,console:{warn(){}},window:{},createImageBitmap:async()=>({width,height,close(){closed++}}),document:{createElement:()=>canvas},toast:msg=>messages.push(msg)};
 scope.window.createImageBitmap=scope.createImageBitmap;
 vm.createContext(scope);vm.runInContext(code,scope);
 scope.putPhotoBlob=async(id,blob)=>{if(storageError)throw storageError;saved.push({id,blob})};
 return {scope,canvas,calls,fills,saved,messages,get closed(){return closed}};
}
const jpeg=()=>new Blob(['compressed JPEG'],{type:'image/jpeg'});
const webp=()=>new Blob(['compressed WebP'],{type:'image/webp'});
test('native WebP succeeds, resizes 1086×1448 to 960×1280, and saves',async()=>{
 const s=setup([webp()]);assert.equal(await s.scope.storePhoto('p1',jpeg()),true);
 assert.equal(s.saved[0].blob.type,'image/webp');assert.deepEqual(s.calls,[{type:'image/webp',quality:.82}]);
 assert.equal(s.canvas.width,960);assert.equal(s.canvas.height,1280);assert.equal(s.closed,1);assert.equal(s.fills.length,0);
});
for(const [name,result] of [['PNG response',new Blob(['png'],{type:'image/png'})],['null response',null],['empty WebP',new Blob([],{type:'image/webp'})],['encoder exception',new Error('unsupported')]]){
 test('JPEG fallback after '+name,async()=>{
  const s=setup([result,jpeg()]);assert.equal(await s.scope.storePhoto('p2',jpeg()),true);
  assert.equal(s.saved[0].blob.type,'image/jpeg');assert.deepEqual(s.calls.map(x=>x.type),['image/webp','image/jpeg']);
  assert.deepEqual(s.fills,[[0,0,960,1280]]);assert.equal(s.closed,1);
 });
}
test('small images are not enlarged',async()=>{const s=setup([webp()],{width:300,height:400});await s.scope.optimizePhoto(jpeg());assert.equal(s.canvas.width,300);assert.equal(s.canvas.height,400)});
test('failure of both encoders never overwrites stored photo',async()=>{const s=setup([null,null]);assert.equal(await s.scope.storePhoto('p3',jpeg()),false);assert.equal(s.saved.length,0);assert.match(s.messages[0],/WebP or JPEG/);assert.equal(s.closed,1)});
test('incorrect JPEG fallback MIME is rejected',async()=>{const s=setup([null,new Blob(['png'],{type:'image/png'})]);assert.equal(await s.scope.storePhoto('p3',jpeg()),false);assert.equal(s.saved.length,0)});
test('storage failure reports failure, with no success result',async()=>{const err=new Error('full');err.name='QuotaExceededError';const s=setup([webp()],{storageError:err});assert.equal(await s.scope.storePhoto('p4',jpeg()),false);assert.match(s.messages[0],/storage is full/)});
test('20 MiB limit and non-image validation still apply',async()=>{const s=setup([]);await assert.rejects(s.scope.optimizePhoto(new Blob([new Uint8Array(20*1024*1024+1)],{type:'image/jpeg'})),/PHOTO_TOO_LARGE/);await assert.rejects(s.scope.optimizePhoto(new Blob(['x'],{type:'text/plain'})),/PHOTO_NOT_IMAGE/);assert.equal(s.calls.length,0)});
test('inline and external JavaScript parse successfully',()=>{for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){const file=m[1].match(/src="([^"?]+)/)?.[1];const source=file?fs.readFileSync(path.join(__dirname,'..',file),'utf8'):m[2];new vm.Script(source,{filename:file||'inline'})}});
