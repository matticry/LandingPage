document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const inner = document.querySelector('.carrusel_inner');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        inner.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = inner.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        inner.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        inner.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX); // Ajustar la velocidad del desplazamiento
        inner.scrollLeft = scrollLeft - walk;
    });

    const images = inner.getElementsByTagName('img');
    let currentIndex = 0;

    function updateActiveImage() {
        Array.from(images).forEach((img, index) => {
            img.classList.remove('active');
        });
        images[currentIndex].classList.add('active');
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateActiveImage();
    }

    function movePrevious() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateActiveImage();
    }

    updateActiveImage();

    let autoSlide = setInterval(moveNext, 3000); // Cambiar imagen cada 3 segundos

    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => autoSlide = setInterval(moveNext, 3000));
});
