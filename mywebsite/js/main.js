jQuery(function($) {
    'use strict';
    $(window).scroll(function(){
        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scroll');
        }else{
            navbar.removeClass('scroll');
        }
    });
});

jQuery(function($) {
// Add smooth scrolling to all links in navbar
    $("a[href^='#']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

// Prevent default anchor click behavior
            event.preventDefault();

// Store hash
            var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

jQuery(function($) {
    $(window).scroll(function() {
        $(".slideright").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animateright");
                $(this).css('visibility','visible');
            }
        });
        $(".slideleft").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animateleft");
                $(this).css('visibility','visible');
            }
        });
        $(".slideflash").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animateflash");
                $(this).css('visibility','visible');
            }
        });
        $(".slidezoom").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("animatezoom");
                $(this).css('visibility','visible');
            }
        });
    });
});