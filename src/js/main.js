"use strict";

function openMenu() {
    const header_nav = document.getElementsByClassName("hero__control");
    header_nav[0].classList.toggle("nav__opened");
    document.getElementsByClassName("hero__header")[0].classList.toggle("header__opened");

    const header_burger = document.getElementsByClassName("hero__burger");
    header_burger[0].classList.toggle("burger__change");
}

const links = document.getElementsByClassName("hero__link");

for (let link of links) { 
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchor = link.getAttribute("href");
        if (anchor == 'signup') {
            
        } else 
            document.getElementsByClassName(anchor)[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

window.onclick = function (e) {
    console.log(e.target);
    if (e.target.dataset.type) {
        let modal = document.querySelector(`.modal[data-type='${e.target.dataset.type}']`);
        modal.style.display = "none";
    }
};

let languageList = document.getElementsByClassName("hero__language")[0];

languageList.onclick = function (e) {
    console.log("Click");
    let list = document.getElementsByClassName("language")[0];
    list.classList.toggle("l_active");
};

function openModal(type) {
    let modal = document.querySelector(`.modal[data-type='${type}']`);
    modal.style.display = "flex";
}

function closeModal(type) {
    let modal = document.querySelector(`.modal[data-type='${type}']`);
    modal.style.display = "none";
}