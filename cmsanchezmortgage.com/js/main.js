// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwVnp6y3UUI99tWUkBp6H3B00EERBd6qM",
  authDomain: "carlos-sanchez-associates.firebaseapp.com",
  databaseURL: "https://carlos-sanchez-associates.firebaseio.com",
  projectId: "carlos-sanchez-associates",
  storageBucket: "",
  messagingSenderId: "713685930992"
};
firebase.initializeApp(config);


// var slideshow_image = document.getElementById("slideshow-home1");
// var slideshow_image2 = document.getElementById("slideshow-home2");
// var slideshow_image3 = document.getElementById("slideshow-home3");
// var slideshow_image4 = document.getElementById("slideshow-home4");
// var image_array = ["slideshow-home1.jpeg", "slideshow-home2.jpeg", "slideshow-home3.jpeg", "slideshow-home4.jpeg"];

// var image_index = 0;

// function changeImage(){
//   photo.setAttribute("src", image_array[image_index]);
//   image_index++;

//   if(image_index >= image_array.length){
//     image_index = 0;
//   }
// }

// ANIMATION ==========================================

// Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);

// Function to check if  in view
function check_if_in_view() {
  var window_height = $window.height();										// Get the window height
  var window_top_position = $window.scrollTop();							// Get the position of the top of the window
  var window_bottom_position = (window_top_position + window_height);		// Calculate the position of the bottom of the window

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

// On any scroll or resize event, check if elements are in view
$window.on('scroll resize', check_if_in_view);

// Trigger as soon as DOM is ready
$window.trigger('scroll');

// ANIMATION ==========================================



// // Reference messages collection
// var ref = firebase.database().ref('messages');


// var submitButton = document.getElementById("contact-submit-button");
// submitButton.addEventListener('click', submitForm);


// // Listen for contact form submit
// function submitForm(e) {

// 	e.preventDefault();
	
// 	var name = getInputValue("full-name");
// 	var email = getInputValue("email");
// 	var phone = getInputValue("phone");
// 	var message = getInputValue("contact-textarea");

// 	// Save the message
// 	saveMessage(name, email, phone, message);

// 	// Show the user an alert
// 	document.querySelector('.alert').style.display = 'block';

// 	// Hide after 3 seconds
// 	setTimeout(function(){
// 		document.querySelector('.alert').style.display = 'none';
// 	}, 3000);

// 	document.getElementById("full-name").value = "";
// 	document.getElementById("email").value = "";
// 	document.getElementById("phone").value = "";
// 	document.getElementById("contact-textarea").value = "";
// } 


// // Function to get form values 
// function getInputValue(id){
// 	return document.getElementById(id).value;
// }

// // Save message to firebase messages
// function saveMessage(name, email, phone, message){
// 	var newMessageRef = ref.push();
// 	newMessageRef.set({
// 		name: name,
// 		phone: phone,
// 		email: email,
// 		message: message

// 	});
// }


// ============================= GOOGLE MAP FUNCTION ========================================== 
function initMap() {
    var coordinates = {lat: 34.067274, lng: -118.392440};
    
    var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 14,
        center: coordinates
    });
        
    var marker = new google.maps.Marker({
      	position: coordinates,
        map: map
    });

    var mini_map = new google.maps.Map(document.getElementById('mini_map'), {
    zoom: 12.9,
        center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: mini_map
    });
}
// ============================== GOOGLE MAP FUNCTION ==========================================
