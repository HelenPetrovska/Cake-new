$(document).ready(function(){

    // mobile-menu

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");
    let menuLinks = document.querySelectorAll(".menu-link");


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

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            mainMenu.classList.remove("active-menu");
            mobileMenu.classList.remove("active-menu");
            document.body.style.overflow = "auto";

        })
    })

    // slider
   
    $('.your-class').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 1500,
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
            }, 500);
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

    let showMoreFilling = document.querySelector(".filling-link");
    let hideRowFiling = document.querySelector(".hide-row-filling");

    showMoreFilling.addEventListener("click", function(e) {
        e.preventDefault();
        hideRowFiling.classList.remove("hide");
        showMoreFilling.classList.add("hide");
    })

});