   // Automatic Slideshow - change image every 4 seconds
        var myIndex = 0;
        let isPaused = false;
        let MarqueeTimeout;
        let timeout = 5000;
        Marquee();

        function Marquee() {

            var i;
            var x = document.getElementsByClassName("mySlides");

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            myIndex++;


            if (myIndex > x.length) { myIndex = 1 }
            if (isPaused) {
                return;
            } else {
                x[myIndex - 1].style.display = "block";

            }
            MarqueeTimeout = setTimeout(Marquee, timeout);

        }

        function pauseMarquee() {
            isPaused = true;
            clearTimeout(MarqueeTimeout); // Stop any existing timeout
        }
        function resumeMarquee() {
            isPaused = false;
            clearTimeout(MarqueeTimeout); // Stop any existing timeout
        }

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