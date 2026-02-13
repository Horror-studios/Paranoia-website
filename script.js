// GSAP animations
gsap.from(".hero-title", { duration: 2, opacity: 0, y: -50, ease: "power2.out" });
gsap.from(".hero-subtitle", { duration: 2, opacity: 0, y: 50, delay: 0.5 });

// Scroll-triggered parallax
gsap.to(".about-section", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -100
});

// Form animation
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    gsap.to(this, { duration: 0.5, scale: 1.1, yoyo: true, repeat: 1 });
    alert('Subscribed!'); // Replace with actual submission
});