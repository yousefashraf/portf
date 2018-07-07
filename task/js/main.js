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
    
    $("a[href^='#']").on('click', function(event) {
        
        if (this.hash !== "") {
            
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },900, function(){
                
                window.location.hash = hash;
            });
        } 
    });
});

jQuery(function($) {
    $('.carousel-inner').css('max-height', $(window).height());
});

$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});

$(document).ready(function(){
    $('.owl-two').owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:5,
                nav:true,
                loop:true
            }
        }
    })
});

jQuery(function($) {
		
		$('.counter_feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//fselect('all');
//
//function fselect(c){
//    var x, i;
//    x = document.getElementsByClassName('mblown');
//    if( c == 'all' ) c = '';
//    for(i=0;i<x.length;i++){
//        rclass(x[i], "show")
//        if( x[i].className.indexOf(c) > -1 ) aclass(x[i], "show");
//    }
//}
//
//function aclass(element, name){
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for(i=0;i<arr2.length;i++){
//        if(arr1.indexOf(arr2[i]) == -1)
//            element.className += " " + arr2[i];
//    }
//}
//
//function rclass(element, name){
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for(i=0;i<arr2.length;i++){
//        while (arr1.indexOf(arr2[i]) > -1){
//            arr1.splice(arr1.indexOf(arr2[i]), 1)
//        }
//    }
//    element.className = arr1.join(" ");
//}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(30.0444, 31.2357),
        zoom: 15,
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



$(document).ready(function() {


  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); 
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


$(function() {
   $(".nav-item").click(function() {
      
      $(".nav-item").removeClass("active");
      
      $(this).addClass("active");
   });
});
$(function() {
   $(".filter").click(function() {
      
      $(".filter").removeClass("active");
     
      $(this).addClass("active");
   });
});


$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').fadeOut();
  $('body').css({'overflow':'visible'});
})


/*///////////////////////////////////////////////////////////////////////////////////*/

            var containerEl = document.querySelector('.sayed');

            var mixer = mixitup(containerEl);





