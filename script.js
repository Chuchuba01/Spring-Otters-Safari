/*document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Navbar Toggle for Mobile
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Booking Modal Event Listener
    const bookingButtons = document.querySelectorAll("[data-bs-target='#bookingModal']");
    bookingButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Booking Modal Opened");
        });
    });

    // Carousel Control Fix
    const carousel = document.querySelector("#hero-carousel");
    if (carousel) {
        carousel.addEventListener("slid.bs.carousel", function (event) {
            console.log(`Carousel moved to slide ${event.to}`);
        });
    }

    // FAQ Accordion Event Listener
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(`Accordion clicked: ${this.textContent.trim()}`);
        });
    });
});*/
