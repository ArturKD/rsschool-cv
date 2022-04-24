


const menuButton = document.querySelector('.menu-button');
const navigationLinks = document.querySelector('.navigation__ul');

const navbarFunction = function () {
    menuButton.classList.toggle("menu-button_active");
    navigationLinks.classList.toggle('navigation__ul_active');
}

menuButton.addEventListener('click', navbarFunction)

let navLinks = document.querySelectorAll('.carousel__cards .carousel__link');
let slides = document.querySelectorAll('.carousel__cards .carousel__image');
let overlays = document.querySelectorAll('.carousel__cards .carousel__bar');
let zindex = navLinks.length;
let easeOut  = 'cubic-bezier(0.77, 0, 0.175, 1)';


slides[0].classList.add('carousel__image_active');
navLinks[0].classList.add('carousel__link_active');
overlays[0].classList.add('carousel__bar_active')


navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        slides.forEach(element => element.classList.remove('carousel__image_active'));
        slides[index].classList.add('carousel__image_active');
        overlays.forEach(element => element.classList.remove( 'carousel__bar_active'));
        overlays[index].classList.add('carousel__bar_active');
        navLinks.forEach(link => link.classList.remove( 'carousel__link_active'));
        link.classList.add('carousel__link_active');
    });
});
