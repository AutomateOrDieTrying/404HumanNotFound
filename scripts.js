// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Form Submission Alerts (for demo purposes)
    const newsletterForm = document.querySelector('.newsletter-form');
    const contactForm = document.querySelector('.contact-form');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
