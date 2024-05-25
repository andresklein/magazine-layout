$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false,
    showCredits: false,
  });
});
$(document).ready(function(){
  $(window).on('load', function(){

      fullpage_api.moveTo(1);
  });
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-txt');
  var distanceY = window.pageYOffset || document.documentElement.scrollTop;
  var triggerScroll = 100; 

  if (distanceY > triggerScroll) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});