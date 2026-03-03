document.addEventListener('DOMContentLoaded', function () {

    // --- Header Scroll Effect ---
    const header = document.querySelector('.site-header');
    const scrollThreshold = 50; // Pixels to scroll before changing header

    function handleHeaderScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll);
    // Initial check in case page is loaded already scrolled
    handleHeaderScroll();


    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mainNav = document.getElementById('mainNav');
    // You can add this class to body to help with styling (e.g. preventing scroll when nav is open)
    // const body = document.body; 

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function () {
            mainNav.classList.toggle('nav-open'); // Toggles visibility of the nav
            // For hamburger icon animation, toggle a class on the button or body
            // If you add 'nav-open' to .site-header, CSS can target .hamburger-icon within it
            header.classList.toggle('nav-open'); // This will trigger the hamburger animation via CSS

            // ARIA attributes for accessibility
            const isExpanded = mainNav.classList.contains('nav-open');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);

            // Optional: Prevent body scroll when mobile nav is open
            // if (isExpanded) {
            //     body.style.overflow = 'hidden';
            // } else {
            //     body.style.overflow = '';
            // }
        });
    }

});