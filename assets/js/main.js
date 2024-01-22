let hamburger = document.querySelector(".logo-area>i");
let menuOptions = document.querySelector(".menu-options");
let closeIcon = document.querySelector(".close-icon");
hamburger.addEventListener("click", () => {
    menuOptions.style.left = "0%";
});

closeIcon.addEventListener("click", () => {
    menuOptions.style.left = "-100%";
});