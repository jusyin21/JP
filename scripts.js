document.addEventListener("DOMContentLoaded", function() {
    // Fade in elements with the fade-in class
    var fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function(element) {
      element.style.animationPlayState = 'running';
    });
  });
  