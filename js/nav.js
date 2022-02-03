var open_nav = document.getElementById("open-nav");
var navbar_content = document.getElementById("nav-content");
var close_nav = document.getElementById("close-nav");
var open_cta = document.getElementById("open-nav");

    close_nav.className = "close-cta";

//  Display Menu 
open_nav.addEventListener('click' , () => {
    navbar_content.className = "navbar-style" ;
    open_nav.className = "close-cta" ;
    close_nav.className = "open-icon" ;
});

close_nav.addEventListener('click' , () => {
    navbar_content.className = "close-nav" ;
    close_nav.className = "close-cta" ;
    open_nav.className = "open-icon" ;
});





/* const   mobileBtn = document.getElementById('open-nav')
        nav = document.querySelector('nav');
        mobileBtnExit = document.getElementById('mobile-exit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('open-navbar');
})
mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
}) */