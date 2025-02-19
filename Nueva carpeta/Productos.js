document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.CajaContainer > div');

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
