let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


setInterval(nextSlide, 10000);


const targetDate = new Date('2025-03-15T00:00:00').getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function subscribe() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message');
    
    if (email === "") {
        message.style.color = "red";
        message.textContent = "Email енгізіңіз!";
        return;
    }
    
    message.style.color = "green";
    message.textContent = "Сіз сәтті жазылдыңыз: " + email;
    document.getElementById('email').value = ""; 
}