// revealOnScroll.js
function revealOnScroll(options) {
    const defaultOptions = {
        selector: '.animated-element',
        threshold: 0.5,
        revealClass: 'reveal',
    };

    const config = { ...defaultOptions, ...options };

    const animatedElements = document.querySelectorAll(config.selector);

    function revealElement(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(config.revealClass);
                observer.unobserve(entry.target);
            }
        });
    }

    animatedElements.forEach(element => {
        const observer = new IntersectionObserver(revealElement, {
            threshold: config.threshold,
        });
        observer.observe(element);
    });
}

// Usage
/*
revealOnScroll({
    selector: '.custom-animated-element', // CSS selector for animated elements
    threshold: 0.3, // Visibility threshold (optional, default: 0.5)
    revealClass: 'custom-reveal', // Class added to elements on reveal (optional, default: 'reveal')
});
*/


