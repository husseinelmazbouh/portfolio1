document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("navMenu");

    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });

    // --- Typewriter Effect ---
    const textElement = document.getElementById("typewriter");
    const phrases = [
        "Full-Stack Engineer",
        "Computer Science Graduate",
        "Problem Solver",
        "Tech Enthusiast"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Deleting speed
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Typing speed
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before next phrase
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    type();

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});