// Toggle menu depending on screen size
function toggleMenu() {
    var x = document.getElementById("mobileNav");
    if (x.classList.contains("w3-hide")) {
        x.classList.remove("w3-hide");
    } else {
        x.classList.add("w3-hide");
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Slideshow
let slideIndex = 0; // Index of the current slide
let slides = document.querySelectorAll(".mySlides");
let slideInterval; // Reference to the interval for automatic slideshow
const slideDuration = 3000; // Duration for each slide in milliseconds

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

// Function to go to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Function to start the automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, slideDuration);
}

// Function to pause the slideshow
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Function to resume the slideshow
function resumeSlideshow() {
    startSlideshow();
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Show the first slide
    startSlideshow(); // Start the automatic slideshow
});


