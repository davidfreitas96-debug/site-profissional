(() => {
  const root = document.documentElement;
  const splash = document.querySelector('.site-splash');

  if (!splash || !root.classList.contains('splash-enabled')) {
    splash?.remove();
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const startedAt = performance.now();
  const visibleTime = 2000;
  const exitTime = reducedMotion ? 0 : 300;
  let exitStarted = false;

  try {
    sessionStorage.setItem('dfs-splash-seen', 'true');
  } catch (error) {
    // O temporizador não depende da disponibilidade do armazenamento.
  }

  const removeSplash = () => {
    splash.remove();
    root.classList.remove('splash-enabled');
  };

  const startExit = () => {
    if (exitStarted) {
      return;
    }

    exitStarted = true;
    splash.classList.add('is-exiting');
    window.setTimeout(removeSplash, exitTime);
  };

  const scheduleExit = () => {
    const elapsed = performance.now() - startedAt;
    const remainingTime = Math.max(0, visibleTime - elapsed);
    window.setTimeout(startExit, remainingTime);
  };

  scheduleExit();

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      removeSplash();
    }
  });
})();
