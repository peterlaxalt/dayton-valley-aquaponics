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

});
