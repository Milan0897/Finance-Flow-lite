document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header Logic ---
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Ignore if it's just a generic '#' link
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                e.preventDefault(); // Prevent default anchor click behavior
                
                // Offset ensures the floating header doesn't cover section titles
                const headerOffset = 120;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        // Adjust this value to trigger the animation sooner or later
        const elementVisible = 100; 

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Listen for scroll events to trigger the animation
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on page load in case elements are already visible on the screen
    revealOnScroll();
});