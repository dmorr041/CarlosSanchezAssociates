$(document).ready(function() {
  var btt = $('.to-top');

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            btt.fadeIn(500);
        } else {
            btt.fadeOut(500);
        }
    });
});