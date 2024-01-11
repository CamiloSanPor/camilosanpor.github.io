// hamburger menu

function burger(){
    let menu = document.querySelector(".nav-menu").classList.toggle("display-menu");
    let color = document.querySelector(".color-toggle").classList.toggle("display-menu");    
}

// slideshow

// code taken from: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2S

let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex, 0);
}, false);

function nextSlide(n, slideID) {
    showSlides(slideIndex += n, slideID);
}

function showSlides(n, slideID) {

    let slides;

    switch(slideID){

        case 0:
            slides = document.getElementsByClassName("slides");

            let firstSlides = [];

            let carrutoSlides = document.getElementsByClassName("slideC");
            let weometrySlides = document.getElementsByClassName("slideWG");

            firstSlides.push(carrutoSlides[0]);
            firstSlides.push(weometrySlides[0]);

            for (let i = 0; i < firstSlides.length; i++){
                firstSlides[i].style.display = "flex";
            }

            return;

        case 1:
            slides = document.getElementsByClassName("slideWG");
            break;

        case 2:
            slides = document.getElementsByClassName("slideC");
            break;

    }

    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex";
}

// color toggle

let counter = JSON.parse(localStorage.getItem("counter"));

if (counter === null) {
    counter = 0;
}

let main = ["#e60041", "#0CC0DF", "#F2E0C9"];
let background = ["black", "black", "#26150F"];
let nav = ["black", "black", "#26150F"];
let navItem = ["#e60041", "#0CC0DF", "white"]
let text = ["white", "white", "black"];
let hover = ["#ea4774", "aquamarine", "#594746"];
let alt = ["white", "white", "#26150F"];

setColors()

function changeColors() {

    if (counter >= 2){
        counter = 0;
    }
    else {
        counter++;
    }

    localStorage.setItem("counter", JSON.stringify(counter));

    setColors()
}

function setColors(){

    document.querySelector(":root").style.setProperty("--main-color", main[counter]);
    document.querySelector(":root").style.setProperty("--background-color", background[counter]);
    document.querySelector(":root").style.setProperty("--text-color", text[counter]);
    document.querySelector(":root").style.setProperty("--hover-color", hover[counter]);
    document.querySelector(":root").style.setProperty("--nav-color", nav[counter]);
    document.querySelector(":root").style.setProperty("--nav-item-color", navItem[counter]);
    document.querySelector(":root").style.setProperty("--alt-header", alt[counter]);

}