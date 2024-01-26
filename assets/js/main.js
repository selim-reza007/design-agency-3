let hamburger = document.querySelector(".logo-area>i");
let menuOptions = document.querySelector(".menu-options");
let closeIcon = document.querySelector(".close-icon");
hamburger.addEventListener("click", () => {
    menuOptions.style.left = "0%";
});

closeIcon.addEventListener("click", () => {
    menuOptions.style.left = "-100%";
});

// const cc1Open = document.querySelector(".");
// const cc2Open = document.querySelector(".");
// const cc3Open = document.querySelector(".");
// const cc1Close = document.querySelector(".");
// const cc2Close = document.querySelector(".");
// const cc3Close = document.querySelector(".");

const vcollapseToggle = document.querySelectorAll(".vcollapse-toggle");
for (let i = 0; i < vcollapseToggle.length; i++) {
    vcollapseToggle[i].addEventListener("click", function () {
        setTimeout(() => {
            if (this.classList.contains("active")) {
                this.children[1].classList.remove("appear");
                this.children[2].classList.add("appear");
            } else {
                this.children[1].classList.add("appear");
                this.children[2].classList.remove("appear");
            }
        }, 1);
    });
    vcollapseToggle[i].children[1].classList.toggle("appear");
}