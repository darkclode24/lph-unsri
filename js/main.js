document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Navbar Scroll & Transparency Transition
    // ==========================================================================
    const header = document.querySelector('.header-nav');
    if (header) {
        const toggleHeaderClass = () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', toggleHeaderClass);
        toggleHeaderClass(); // Run once on load to handle refreshed scroll positions
    }

    // ==========================================================================
    // Mobile Drawer Navigation
    // ==========================================================================
    const menuBtn = document.querySelector('.menu-toggle-btn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    if (menuBtn && mobileDrawer) {
        const toggleMenu = () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            const iconSpan = menuBtn.querySelector('.material-symbols-outlined');
            if (iconSpan) {
                iconSpan.textContent = isOpen ? 'close' : 'menu';
            }
            // Lock background scrolling when drawer is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close drawer when clicking outside it
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== menuBtn) {
                toggleMenu();
            }
        });
    }

    // ==========================================================================
    // Active Link Highlighting
    // ==========================================================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Desktop links
    const desktopLinks = document.querySelectorAll('.nav-menu a');
    desktopLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === '#') || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile drawer links
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === '#') || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================================================
    // Intersection Observer for Scroll Reveals
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ==========================================================================
    // Lightbox Functionality (Image Zoom Overlay)
    // ==========================================================================
    const zoomableWrappers = document.querySelectorAll('.zoomable-image-wrapper');
    
    if (zoomableWrappers.length > 0) {
        // Create lightbox elements dynamically if they do not exist
        let lightboxOverlay = document.getElementById('lightboxOverlay');
        if (!lightboxOverlay) {
            lightboxOverlay = document.createElement('div');
            lightboxOverlay.id = 'lightboxOverlay';
            lightboxOverlay.className = 'lightbox-overlay';
            lightboxOverlay.innerHTML = `
                <button class="lightbox-close" aria-label="Close image zoom">
                    <span class="material-symbols-outlined" style="font-size: 40px;">close</span>
                </button>
                <div class="lightbox-content">
                    <img class="lightbox-img" src="" alt="Zoomed view">
                </div>
            `;
            document.body.appendChild(lightboxOverlay);
        }

        const lightboxImg = lightboxOverlay.querySelector('.lightbox-img');
        const lightboxClose = lightboxOverlay.querySelector('.lightbox-close');

        const openLightbox = (imgSrc, imgAlt) => {
            if (lightboxImg && lightboxOverlay) {
                lightboxImg.src = imgSrc;
                lightboxImg.alt = imgAlt || 'Zoomed View';
                lightboxOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        };

        const closeLightbox = () => {
            if (lightboxOverlay) {
                lightboxOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        };

        zoomableWrappers.forEach(wrapper => {
            wrapper.addEventListener('click', () => {
                const img = wrapper.querySelector('img');
                if (img) {
                    openLightbox(img.src, img.alt);
                }
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        if (lightboxOverlay) {
            lightboxOverlay.addEventListener('click', (e) => {
                if (e.target === lightboxOverlay) {
                    closeLightbox();
                }
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxOverlay.classList.contains('open')) {
                closeLightbox();
            }
        });
    }
});
