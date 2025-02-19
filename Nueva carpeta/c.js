document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const boxes = document.querySelectorAll('#content section');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            boxes.forEach(b => b.classList.add('dim'));
            box.classList.remove('dim');
            box.classList.add('grow');
        });

        box.addEventListener('mouseleave', () => {
            boxes.forEach(b => b.classList.remove('dim'));
            box.classList.remove('grow');
        });
    });
});
