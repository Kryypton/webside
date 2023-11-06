document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const starInfoBox = document.querySelector('.star-info');
  
    stars.forEach(star => {
      star.addEventListener('mouseover', function(e) {
        const starName = e.target.getAttribute('data-name');
        starInfoBox.innerText = starName;
        starInfoBox.style.display = 'block';
        starInfoBox.style.top = (e.target.offsetTop - starInfoBox.offsetHeight - 5) + 'px';
        starInfoBox.style.left = (e.target.offsetLeft - (starInfoBox.offsetWidth / 2) + 5) + 'px';
      });
  
      star.addEventListener('mouseout', function() {
        starInfoBox.style.display = 'none';
      });
    });
  
    const constellation = document.querySelector('.constellation');
    constellation.addEventListener('mouseover', function() {
      constellation.style.transform = 'rotate(10deg)';
    });
  
    constellation.addEventListener('mouseout', function() {
      constellation.style.transform = 'rotate(0deg)';
    });
  });
  