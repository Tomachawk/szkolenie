AOS.init();

let menu = document.guerySelector(".menu")

// kliknięcia w hamburger
let hamburger = document.getElementById("hamburger");
// nałożenie nasłuchiwania na hamburger
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("is-open");
})

let sliderButton = document.grtElementById("slider");

sliderButton.addEventListener("click", function () {
    document.body.classList.toggle("no-menu");
})