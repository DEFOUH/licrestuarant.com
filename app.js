const images = document.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        function changeImage() {
            images[currentIndex].classList.remove('active');

            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            images[currentIndex].classList.add('active');
        }

        setInterval(changeImage, 5000);

//programing the click carousel//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//for the counter//

function updateCounter() {
    var now = new Date("Febrary 11, 2024 00:00:00");
    var end = new Date(); // Set your end date here
    var difference = now - end;

    var days = Math.floor(difference / (1000* 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);

    var minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);

    var seconds = Math.floor(difference / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCounter, 1000);


function openPopup() {
    var notifyPanel = document.getElementById("popup");
     notifyPanel.style.display = (notifyPanel.style.display === "block") ? "none" : "block";
     notifyPanel.style.top = (notifyPanel.style.top === '50%')? '0' : '50%';
     notifyPanel.style.transform = (notifyPanel.style.transform === 'translate(-50%, -50%)scale(1)')? "translate(-50%, -50%)scale(0.1)" : "translate(-50%, -50%)scale(1)"
   }

function closePopup() {
    var notifyPanel = document.getElementById("popup");
     notifyPanel.style.display = (notifyPanel.style.display === "block") ? "none" : "block";
     notifyPanel.style.top = (notifyPanel.style.top === '50%')? '0' : '50%';
     notifyPanel.style.transform = (notifyPanel.style.transform === 'translate(-50%, -50%)scale(1)')? "translate(-50%, -50%)scale(0.1)" : "translate(-50%, -50%)scale(1)"
   }
