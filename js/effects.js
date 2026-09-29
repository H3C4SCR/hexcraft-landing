(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const art = document.querySelector('.hero-art');
        const reducedMotion = window.Hexcraft?.prefersReducedMotion?.() ?? false;
        if (!art || reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

        let frameRequested = false;
        let pointerX = 0;
        let pointerY = 0;

        art.addEventListener('pointermove', (event) => {
            const bounds = art.getBoundingClientRect();
            pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
            pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
            if (frameRequested) return;

            frameRequested = true;
            window.requestAnimationFrame(() => {
                art.style.setProperty('--pointer-x', `${pointerX}px`);
                art.style.setProperty('--pointer-y', `${pointerY}px`);
                art.style.transform = `translate3d(var(--pointer-x), var(--pointer-y), 0)`;
                frameRequested = false;
            });
        });

        art.addEventListener('pointerleave', () => {
            art.style.removeProperty('--pointer-x');
            art.style.removeProperty('--pointer-y');
            art.style.transform = 'translate3d(0, 0, 0)';
        });
    });
})();
