// script.js

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

function updateTotal(price) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var totalPrice = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            totalPrice += price;
        }
    });

    document.getElementById('total-price').innerText = 'Total Price: $' + totalPrice.toFixed(2);
}

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const transformValue = -currentIndex * itemWidth + 'px';
    carousel.style.transform = 'translateX(' + transformValue + ')';
}
