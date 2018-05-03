var footerFix = function(){
    var viewportWidth = $(window).width();
    if (viewportWidth < 340){
        $(".footer-col").removeClass("col-7").addClass("col-11");
    }
    else{
        $(".footer-col").removeClass("col-11").addClass("col-7"); 
        if (viewportWidth < 470) {
            $(".footer-col").removeClass("col-7").addClass("col-10");
        }
        else{
            $(".footer-col").removeClass("col-10").addClass("col-7");
        }
    }
}

$(document).ready(function () {
    
    /*
    console.log("hey");
    $(".menu__burger").on("click",function () {
        console.log("hey");
        $(".rmv").removeClass("col-sm-9");
        $(".menu__elem ").toggleClass("menu__elem--opened");
        $(".nav").toggleClass("nav--opened");
    })

    $(".nav__cross").on("click",function () {
        console.log("clicked");
        console.log($(".nav-list__burger"));
        $(".nav-list__nav-element").toggleClass("nav-list__nav-element--open");
        $(".nav").toggleClass("nav--opened");
    })*/
    footerFix();

    $(".navbar-toggler").on("click",function () {
        $(".banner").toggleClass("bnr-mrg");
        $(".nav-link").toggleClass("nav-link--toogled");
        $(".menu__burger").toggleClass("menu__cross");
        $(".navbar").toggleClass("padding-vh");
        $(".container-nav").toggleClass("fixed-top");
        $(".mobile-background").toggleClass("working");
    });

    $(".active").on("click",function () {
        $('.navbar-collapse').collapse('hide');
        $(".banner").toggleClass("bnr-mrg");
        $(".nav-link").toggleClass("nav-link--toogled");
        $(".menu__burger").toggleClass("menu__cross");
        $(".navbar").toggleClass("padding-vh");
        $(".navbar").toggleClass("fixed-top");
        $(".mobile-background").toggleClass("working");
    });
});

$(window).resize(function () {
footerFix();    
});

