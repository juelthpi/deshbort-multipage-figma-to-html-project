$(document).ready(function(){

	// Account ID of Recepient input
	$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
		});
	});





	  $('.nav-button').click(function(){
		$('body').toggleClass('nav-open');
	  });
	  
	$('.nav-button').click(function(){
		$('.deshboard_menu_area').slideToggle(500);

		return false;
	});
	$('.nav-button').click(function(){
		$('.landing_menu ul').slideToggle(500);

		return false;
	});
	

var inputs = document.querySelectorAll('input[type="password"]');

	if (inputs !== undefined && inputs !== null) {
								
		[].map.call(inputs, function(input) {
			
			var btn = input.nextElementSibling;		
			// If JavaScript enabled
			btn.removeAttribute('disabled');
			
			btn.addEventListener('click', function(e) {
				if (input.type == 'password') {
					input.type = 'text';
					btn.setAttribute('aria-label', 'Hide password');
					btn.classList.add('shpass_show');
				} else {
					input.type = 'password';
					btn.setAttribute('aria-label', 'Show password');
					btn.classList.remove('shpass_show');
				}			
				e.preventDefault();
			
			},false);
			
		},false);
		    	
	} // End if test

	// progress-bar
	$(function(){
  	$('.cirelechart').circlechart();

	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1,
	            
	        },
	        600:{
	            items:1,
	            
	        },
	        1000:{
	            items:1,
	            
	        }
	    }
	})


	
});



