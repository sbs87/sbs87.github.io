// Slideshow params
let slideIndex = 0; 
let slides = document.querySelectorAll(".mySlides");
let slideInterval;
const slideDuration = 4000; // Duration for each slide in milliseconds

// Responsive nav bar, hamburger menu
function hamburgerShow() {
    var x = document.getElementById("topNav2");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//
// Slide show functions
// 

// Show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

// Go to next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Go to previous slide
function prevSlide() {
    if(slideIndex ==0){
        slideIndex = slides.length-1;
    }else{
        slideIndex = (slideIndex - 1) % slides.length;
    }
    showSlide(slideIndex);
}

// Start the automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, slideDuration);
}

// Pause the slideshow
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Resume the slideshow
function resumeSlideshow() {
    startSlideshow();
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Show the first slide
    startSlideshow(); // Start the automatic slideshow
});


