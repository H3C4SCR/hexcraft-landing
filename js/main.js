(() => {
    'use strict';

    document.documentElement.classList.add('js-enabled');

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = () => motionQuery.matches;

    function initNavigation() {
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.nav-links, .nav-menu');
        if (!toggle || !menu) return;

        const closeMenu = () => {
            menu.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menu');
        };

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        });

        menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                toggle.focus();
            }
        });
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 760) closeMenu();
        });
    }

    function initSmoothLinks() {
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const target = document.querySelector(link.getAttribute('href'));
                if (!target) return;

                event.preventDefault();
                history.pushState(null, '', link.getAttribute('href'));
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            });
        });
    }

    function initReveal() {
        const elements = document.querySelectorAll('[data-reveal]');
        if (!elements.length) return;
        if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

        elements.forEach((element) => observer.observe(element));
    }

    window.Hexcraft = window.Hexcraft || {};
    window.Hexcraft.prefersReducedMotion = prefersReducedMotion;

    document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initSmoothLinks();
        initReveal();
    });
})();
