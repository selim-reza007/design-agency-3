let hamburger = document.querySelector(".logo-area>i");
let menuOptions = document.querySelector(".menu-options");
let closeIcon = document.querySelector(".close-icon");
hamburger.addEventListener("click", () => {
    menuOptions.style.left = "0%";
});

closeIcon.addEventListener("click", () => {
    menuOptions.style.left = "-100%";
});


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

let caseStudy = document.getElementById("case_study");
let length = caseStudy.children.length;
let gallaryImg = document.getElementById("gallary_img");
const imageContainer = document.querySelector(".bottom-sectoion");
let selected;
for (let i = 0; i < length; i++) {
    caseStudy.children[i].addEventListener("click", function () {
        this.classList.add("case-study-menu");

        for (let j = 0; j < length; j++) {
            if (Number.parseInt(caseStudy.children[j].id) === i) {
                continue;
            }
            else caseStudy.children[j].classList.remove("case-study-menu");
        }
    })
}
