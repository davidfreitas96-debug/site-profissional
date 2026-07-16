/* Interações locais do espaço público. Sem cookies, armazenamento ou requisições. */
(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const intro = document.querySelector('.portal-intro');
  if (intro) {
    const closeIntro = () => {
      intro.classList.add('is-exiting');
      window.setTimeout(() => intro.remove(), reducedMotion ? 0 : 380);
    };
    window.setTimeout(closeIntro, reducedMotion ? 0 : 1800);
  }

  const revealTargets = document.querySelectorAll('[data-portal-reveal]');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('portal-motion-ready');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });
    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  }

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  document.querySelectorAll('[data-portal-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const current = document.body.dataset.portalPage || '';
  document.querySelectorAll('[data-portal-nav]').forEach((link) => {
    if (link.dataset.portalNav === current) link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('[data-local-search]').forEach((panel) => {
    const input = panel.querySelector('[data-search-input]');
    const status = panel.querySelector('[data-search-status]');
    const targetName = panel.dataset.localSearch;
    const items = Array.from(document.querySelectorAll(`[data-search-group="${targetName}"]`));
    const filters = Array.from(panel.querySelectorAll('[data-filter]'));
    let activeFilter = 'todos';

    const update = () => {
      const query = normalize(input?.value.trim() || '');
      let shown = 0;
      items.forEach((item) => {
        const haystack = normalize(`${item.textContent} ${item.dataset.categories || ''} ${item.dataset.keywords || ''}`);
        const categories = (item.dataset.categories || '').split(' ');
        const matchesQuery = !query || haystack.includes(query);
        const matchesFilter = activeFilter === 'todos' || categories.includes(activeFilter);
        item.hidden = !(matchesQuery && matchesFilter);
        if (!item.hidden) shown += 1;
      });
      if (status) status.textContent = `${shown} ${shown === 1 ? 'resultado encontrado' : 'resultados encontrados'}.`;
    };

    input?.addEventListener('input', update);
    filters.forEach((button) => {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter || 'todos';
        filters.forEach((candidate) => candidate.setAttribute('aria-pressed', String(candidate === button)));
        update();
      });
    });
    update();
  });

  document.querySelectorAll('[data-copy-value]').forEach((button) => {
    button.addEventListener('click', async () => {
      const selector = button.dataset.copyValue;
      const source = selector ? document.querySelector(selector) : null;
      if (!source) return;
      const text = source.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'Copiado';
      } catch (error) {
        button.textContent = 'Selecione e copie o texto';
      }
    });
  });

  if (window.location.hash) {
    window.addEventListener('load', () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.setAttribute('tabindex', '-1');
    }, { once: true });
  }
})();
