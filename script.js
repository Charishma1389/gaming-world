<script>
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.image-slide');
    
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize the first slide
showSlide(currentSlide);

// Set an interval to change the slide every 3 seconds
setInterval(() => {
    changeSlide(1); // Automatically go to the next slide
}, 3000); // 3000 milliseconds = 3 seconds
</script>