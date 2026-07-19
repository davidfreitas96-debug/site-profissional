(() => {
  const navToggle = document.getElementById('navToggle');
  const navigation = document.getElementById('navigation');
  const logoLink = document.querySelector('.logo-area');
  const mobilePortalLink = document.querySelector('.mobile-portal-link');
  // Mantido em sincronia com o breakpoint do menu em styles.css.
  const mobileNavigation = window.matchMedia('(max-width: 1279px)');

  const setNavigationState = (open, { returnFocus = false } = {}) => {
    if (!navToggle || !navigation) return;

    const mobile = mobileNavigation.matches;
    const shouldOpen = mobile && open;
    navigation.classList.toggle('nav-open', shouldOpen);
    navToggle.classList.toggle('open', shouldOpen);
    navToggle.setAttribute('aria-expanded', String(shouldOpen));
    navToggle.setAttribute('aria-label', shouldOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', shouldOpen);

    if (mobilePortalLink) {
      if (shouldOpen) {
        mobilePortalLink.setAttribute('inert', '');
        mobilePortalLink.setAttribute('aria-hidden', 'true');
      } else {
        mobilePortalLink.removeAttribute('inert');
        mobilePortalLink.removeAttribute('aria-hidden');
      }
    }

    if (mobile && !shouldOpen) {
      navigation.setAttribute('inert', '');
      navigation.setAttribute('aria-hidden', 'true');
      navigation.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
    } else {
      navigation.removeAttribute('inert');
      navigation.removeAttribute('aria-hidden');
      navigation.querySelectorAll('a').forEach((link) => link.removeAttribute('tabindex'));
    }

    if (returnFocus && !shouldOpen) navToggle.focus();
  };

  if (navToggle && navigation) {
    setNavigationState(false);

    navToggle.addEventListener('click', () => {
      const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
      setNavigationState(willOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        setNavigationState(false);

        if (event.detail !== 0 || !link.hash) return;
        const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        if (!target) return;
        target.setAttribute('tabindex', '-1');
        window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
      });
    });

    logoLink?.addEventListener('click', () => setNavigationState(false));

    document.addEventListener('keydown', (event) => {
      if (!mobileNavigation.matches || navToggle.getAttribute('aria-expanded') !== 'true') return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setNavigationState(false, { returnFocus: true });
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = [...navigation.querySelectorAll('a'), navToggle];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    const handleViewportChange = () => setNavigationState(false);
    if (typeof mobileNavigation.addEventListener === 'function') {
      mobileNavigation.addEventListener('change', handleViewportChange);
    } else {
      mobileNavigation.addListener(handleViewportChange);
    }
    window.addEventListener('orientationchange', handleViewportChange);
    window.addEventListener('resize', () => {
      if (navToggle.getAttribute('aria-expanded') === 'true') handleViewportChange();
    }, { passive: true });
    window.addEventListener('pageshow', () => setNavigationState(false));
  }

  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const updateHeaderState = () => {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > 18);
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const submitStatus = contactForm.querySelector('.form-submit-status');
    const nextField = contactForm.querySelector('input[name="_next"]');
    const defaultLabel = submitButton?.dataset.submitLabel || submitButton?.textContent.trim() || 'Enviar mensagem';

    const resetSubmitState = () => {
      contactForm.removeAttribute('aria-busy');
      delete contactForm.dataset.submitting;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultLabel;
      }
      if (submitStatus) submitStatus.textContent = '';
    };

    contactForm.addEventListener('submit', (event) => {
      if (contactForm.dataset.submitting === 'true') {
        event.preventDefault();
        return;
      }

      if (nextField && /^https?:$/.test(window.location.protocol)) {
        nextField.value = new URL('obrigado.html', window.location.href).href;
      }

      contactForm.dataset.submitting = 'true';
      contactForm.setAttribute('aria-busy', 'true');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando…';
      }
      if (submitStatus) {
        submitStatus.textContent = 'Enviando sua mensagem. Aguarde a confirmação.';
      }
    });

    window.addEventListener('pageshow', resetSubmitState);
  }

  const revealElements = document.querySelectorAll(
    'section, .service-card, .lattes-link, .faq-item, .for-who-list li, .how-list li, .booking-image, .about-image, .approach-image'
  );
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('enhanced-motion');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
})();
