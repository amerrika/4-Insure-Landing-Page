const navToggle = document.querySelector(".mobile-nav-toggle");
const groupedElement = document.querySelector(".grouped");
const buttonClose = document.querySelector(".icon-close")
const buttonHamburger = document.querySelector(".icon-hamburger");


navToggle.addEventListener("click", function(){
    groupedElement.classList.toggle("display-none")
    buttonClose.classList.toggle("display-none")
    buttonHamburger.classList.toggle("display-none")
})