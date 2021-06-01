(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });


	    // Header Search Form
		$("#search-modal-btn").on("click", function(e) {
			e.preventDefault();
			$(".search-modal-wrpr").addClass("active");
		});

		$('.search-modal-wrpr .close-icon').on('click', function() {
		  	$(".search-modal-wrpr").removeClass("active");
		});

		var element = document.getElementById("text-roller");
		var text_roller = new TextRoller(element);
		text_roller.start();


	    $('#home-testimonials-carousel').owlCarousel({
	    	center: true,
		    loop:true,
		    nav:true,
		    navText: ['<img src="assets/img/icons/arrow-left.png"/>','<img src="assets/img/icons/arrow-right.png"/>'],
		    dots:false,
		    responsive:{
		        0:{
		            items:1,
		    		margin:10,
		        },
		        600:{
		            items:2,
		    		margin:10,
		        },
		        1000:{
		            items:2,
		    		margin:150,
		        }
		    }
		})


	    $('#home-brain-carousel').owlCarousel({
	    	center: true,
		    loop:true,
		    nav:true,
		    navText: ['<img src="assets/img/icons/arrow-left.png"/>','<img src="assets/img/icons/arrow-right.png"/>'],
		    dots:false,
		    responsive:{
		        0:{
		            items:1,
		    		margin:10,
		        },
		        600:{
		            items:2,
		    		margin:10,
		        },
		        1000:{
		            items:2,
		    		margin:150,
		        }
		    }
		})
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	