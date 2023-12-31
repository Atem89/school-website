/* Start Preloader */
window.addEventListener("load", function () {
    
    setTimeout(function () {
        
        document.body.style.backgroundColor = "white";

        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
        
        const content = document.getElementById("main");
        content.style.display = "block";
    }, 500); 
});

/* End Preloader */

/* Start Slider */

const slides = document.querySelectorAll('.slider__item');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

const manualNav = function(manual){
    slides.forEach((slider__item)=> {
        slider__item.classList.remove('active');

        btns.forEach((btn)=> {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    });
});

const repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    const repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i=0;
            }
            if(i>= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
/* End Slider */

/* */

// Open and close burger-menu
const navBurgerIcon = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');
const body = document.body;

if (navBurgerIcon) {
    navBurgerIcon.addEventListener("click", function(e) {
        navBurgerIcon.classList.toggle('_active');
        nav.classList.toggle('_active');
    });
    // close menu on click out field of menu
    body.addEventListener("click", function(e) {
        if (!nav.contains(e.target) && !navBurgerIcon.contains(e.target)) {
            navBurgerIcon.classList.remove('_active');
            nav.classList.remove('_active');
        }
    });
    // close menu on click link to section
    nav.addEventListener("click", function(e) {
        if (!navBurgerIcon.contains(e.target)) {
            navBurgerIcon.classList.remove('_active');
            nav.classList.remove('_active');
        }
    });
}


/* */