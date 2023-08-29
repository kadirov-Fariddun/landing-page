// slider scripts
const sliderArrows = document.querySelectorAll('.slider-arrow');
const sliderItem = document.querySelector('.slider-item');
let sliderIsActive = false;
for(let i = 0;i<sliderArrows.length;i++){
    const arrow = sliderArrows[i];
    arrow.onclick = ()=> {  
        if(!sliderIsActive){
            setTimeout(() => {
                sliderIsActive = !sliderIsActive;
            }, 400);
            
           sliderItem.style.backgroundImage = 'url(images/carousel-2.jpg)'
        }else{
            setTimeout(() => {
                sliderIsActive = !sliderIsActive;
            }, 400);
           sliderItem.style.backgroundImage = 'url(images/carousel-1.jpg)';
        }
       
    } ;
}
// обрабатываем меню по климку в бургер
const menuBtnBurger = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const menuBottomLinksBtn = document.querySelectorAll('.navbar ul li')[3];
const menuBottomLinks = document.querySelector('.navbar__link_bottom');
function onclickToggle(btn,block,className){
    btn.onclick = () =>{
        return block.classList.toggle(className);
    };
};
onclickToggle(menuBtnBurger,navbar,'active');
onclickToggle(menuBottomLinksBtn,menuBottomLinks,'active-link');
// write function scroll active header
const header = document.querySelector('.header');
window.onscroll = () => {
    if(scrollY >= 50){
       header.classList.add('header-fixed');
       document.querySelector('.scroll-to-top').classList.add('scroll-to-top-active');
    }
    else {
        header.classList.remove('header-fixed');
        document.querySelector('.scroll-to-top').classList.remove('scroll-to-top-active');
    }
};
// testimonial slider 
(()=>{
    $('.testimonial__slider').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        speed: 1000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            }, 
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
           
          ]
    })
})();

// script for scroll page 
$(document).ready(function(){
    $('[href^="#"]').on('click', function(event){
         if ($(this).attr('hash') !== "") {
         event.preventDefault();
         let hash = $(this).prop('hash');
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 800, function(){
         });
       }
     });
});
// spinner script
document.querySelector('body').onload = () => {
    setTimeout(() => {
        document.querySelector('.spinner').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.spinner').style.display = 'none';
        }, 1300);
    }, 700);
}
