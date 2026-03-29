// Animation des éléments lors du défilement
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, .feature-item, .stat, .download-box');
    
    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
