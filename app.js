$(document).ready(function(){

    // mobile-menu

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");

    mobileMenu.addEventListener("click", function() {
        mobileMenu.classList.toggle("active-menu");
        if(mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
            document.body.style.overflow = "hidden";
        } else {
            mainMenu.classList.remove("active-menu");
            document.body.style.overflow = "auto";
        }
    })

    // slider
   
    $('.your-class').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    // AOS

    AOS.init();

    // btn goTop

    $(function () {
        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        })
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // show-more

    let showMoreAssortment = document.querySelector(".assortment-link");
    let hideRowAssortment = document.querySelector(".hide-row-assortment");

    showMoreAssortment.addEventListener("click", function(e) {
        e.preventDefault();
        hideRowAssortment.classList.remove("hide");
        showMoreAssortment.classList.add("hide");
    })

});