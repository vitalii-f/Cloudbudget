"use strict";

function openMenu() {
    const header_nav = document.getElementsByClassName("hero__control");
    header_nav[0].classList.toggle("nav__opened");
    document.getElementsByClassName("hero__header")[0].classList.toggle("header__opened");

    const header_burger = document.getElementsByClassName("hero__burger");
    header_burger[0].classList.toggle("burger__change");
}

const links = document.getElementsByClassName("hero__link");

let modal = document.getElementsByClassName("modal");
let modal_close = document.getElementsByClassName("modal__close")[0];

modal_close.onclick = function(e) {
    modal[0].style.display = "none";

}

for (let link of links) { 
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchor = link.getAttribute("href");
        if (anchor == 'signup') {
            
            console.log(modal[0]);
            modal[0].style.display = "flex";
        } else document.getElementsByClassName(anchor)[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

window.onclick = function (e) {
    if (e.target == modal[0]) {
        modal[0].style.display = "none";
    }
};

let languageList = document.getElementsByClassName("hero__language")[0];



languageList.onclick = function (e) {
    console.log("Click");
    let list = document.getElementsByClassName("language")[0];
    if (list.style.display == "none") {
        list.style.display = "flex";  
    } else list.style.display = "none"; 
};