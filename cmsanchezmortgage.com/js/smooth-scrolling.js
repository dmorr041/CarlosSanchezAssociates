$(document).ready(function(){

	var scrollLink = $('.scroll');

	// Smooth Scrolling

	// When a scrollLink is clicked
	scrollLink.click(function(e){
		e.preventDefault();	// Prevent the default snapping behavior

		// Select the body
		$('body,html').animate({
			// Find how far the offset is from the top to where we'd like to scroll to
			scrollTop: $(this.hash).offset().top
		}, 1000)
	})

})