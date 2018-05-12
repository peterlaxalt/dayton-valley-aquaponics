//
$(document).ready(function() {
  $('.lmnt-nav-hamburger').click(function() {
    $('.lmnt-nav-list').addClass('lmnt-nav-mobile');
    $('.lmnt-nav-hamburger').addClass('lmnt-nav-link');
  });

  $('.lmnt-nav-link').click(function() {
    if ($('.lmnt-nav-list').hasClass('lmnt-nav-mobile')) {
      $('.lmnt-nav-list').removeClass('lmnt-nav-mobile');
      $('.lmnt-nav-hamburger').removeClass('lmnt-nav-link');
    };
  });

  $('.lmnt-nav-mobile-close').click(function() {
    if ($('.lmnt-nav-list').hasClass('lmnt-nav-mobile')) {
      $('.lmnt-nav-list').removeClass('lmnt-nav-mobile');
      $('.lmnt-nav-hamburger').removeClass('lmnt-nav-link');
    };
  });

  $('.lmnt-cta-button').click(function() {
    if ($(this).hasClass('clicked')) {
      //do nothing
    }
    else {
      if ($('.lmnt-cta-button').hasClass('clicked')) {
        $('.lmnt-cta-button').removeClass('clicked');
        $(this).addClass('clicked');
        removeEvents( $(this) );
      }
    }
  });

removeEvents( $('.clicked') );

});

function removeEvents ( buttonDiv ){
  allEvents = document.getElementsByClassName("lmnt-event-container");
  var index = allEvents.length;

  for (var i = 0; i < index; i++){
    var div = allEvents[i];
    div.classList.remove('hide-class');
    
    if ( allEvents[i].id != buttonDiv.text())
      div.classList.add('hide-class');
    }
}
