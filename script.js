let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.image-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (index >= slides.length) {
        currentSlide = 0; // Loop back to first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
        indicators[i].classList.toggle('active', i === currentSlide);
    });
}

// Initialize the first slide
showSlide(currentSlide);

// Optional: Automatically change slides every few seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Change slide every 3 seconds
