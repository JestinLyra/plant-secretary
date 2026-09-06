// Plant Secretary v144 — resilient primary navigation
(() => {
  'use strict';

  function activateView(viewId) {
    if (!viewId) return;
    const target = document.getElementById(viewId);
    if (!target || !target.classList.contains('app-view')) return;

    document.querySelectorAll('.app-view').forEach(view => {
      const active = view.id === viewId;
      view.hidden = !active;
      view.classList.toggle('active-view', active);
    });

    document.querySelectorAll('.bottom-nav [data-view]').forEach(button => {
      button.classList.toggle('nav-active', button.dataset.view === viewId);
    });

    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // One delegated handler works for both the original buttons and the Project
  // button that project.js injects after app.js has already initialised.
  document.addEventListener('click', event => {
    const button = event.target.closest?.('.bottom-nav [data-view]');
    if (!button) return;
    activateView(button.dataset.view);
  }, true);

  // Ensure the dynamically inserted Project image always has a valid source.
  function repairProjectIcon() {
    const img = document.querySelector('.bottom-nav .nav-project-uploaded');
    if (img && !img.getAttribute('src')) {
      img.setAttribute('src', 'assets/icons/project-nav-approved.png?v=144');
    }
  }

  repairProjectIcon();
  const observer = new MutationObserver(repairProjectIcon);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
