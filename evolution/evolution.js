window.onload = function() {
    var scrollButton = document.getElementById('scrollButton');
    var targetDiv = document.getElementById('targetDiv');
  
    scrollButton.addEventListener('click', function() {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
  };
   