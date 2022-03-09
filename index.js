const btnNavbarClass = document.querySelector('.btn-navbar-class');
const listLavbarClass = document.querySelector('.list-navbar-class');

const navbarFunction = function () {
    btnNavbarClass.classList.toggle("active");
    listLavbarClass.classList.toggle('active');
}

btnNavbarClass.addEventListener('click', navbarFunction)

let navLinks = document.querySelectorAll('.cards .nav-link');
let slides = document.querySelectorAll('.cards .card-image');
let overlays = document.querySelectorAll('.cards .bar');
let description = document.querySelectorAll('.description')
let zindex = navLinks.length;
let easeOut  = 'cubic-bezier(0.77, 0, 0.175, 1)';
description[0].classList.add('active')
slides[0].classList.add('active');
navLinks[0].classList.add('active');

navLinks.forEach((link, index) => {
    overlays[index].style.zIndex = `${navLinks.length - index}`;
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove( 'active'));
        link.classList.add('active');

        let currentDescription = document.querySelector('.description.active');
        let fadeOutDescription = currentDescription.animate([
                { transform: "translateX(0)", opacity: 1 },
                { transform: "translateX(5%)", opacity: 0 }
            ], {
                duration: 600,
                easing: "ease-in",
                fill: "forwards"
            }
        );
        let currentSlides = document.querySelector('.cards .card-image.active');
        let fadeOut = currentSlides.animate( [
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        }
        );
        fadeOutDescription.onfinish = () => {
            description.forEach(descrpt => descrpt.classList.remove('active'));
            let activeDescription = description[index];
            activeDescription.classList.add('active');
            activeDescription.animate(
                [
                    {
                        transform: "translateX(-5%)",
                        opacity: 0
                    },
                    {
                        transform: "translateX(0)",
                        opacity: 1
                    }
                ],
                {  duration: 600, easing: "ease-out", fill: "forwards" }
            );
        };
        fadeOut.onfinish = () => {
            slides.forEach(slide => slide.classList.remove('active'));
            let activeSlide = slides[index];
            activeSlide.classList.add('active');
            activeSlide.animate(
                [
                    {
                        transform: "translateX(-5%)",
                        opacity: 0
                    },
                    {
                        transform: "translateX(0)",
                        opacity: 1
                    }
                ],
                {  duration: 600, easing: "ease-out", fill: "forwards" }
            );
        };
        zindex += 1;
        let activeOverlay = overlays[index];
        activeOverlay.style.zIndex = `${zindex}`;
        activeOverlay.animate(
            [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
            { duration: 1200, fill: "forwards", easing: easeOut }
        );
    });
});
