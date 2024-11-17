window.onload = function() {
  var roller = document.querySelector('.roller');
  var rolls = Array.from(document.querySelectorAll('.roll'));
  rolls.forEach(function(roll) {
      var clone = roll.cloneNode(true);
      roller.appendChild(clone);
  });

  var rollWidth = document.querySelector('.roll').offsetWidth;
  var totalWidth = rollWidth * document.querySelectorAll('.roll').length;

  var cssAnimation = document.createElement('style');
  cssAnimation.type = 'text/css';
  var rules = document.createTextNode('@keyframes roll {' +
      '0% { transform: translateX(0px); }' +
      '100% { transform: translateX(' + -totalWidth + 'px); }' +
  '}');
  cssAnimation.appendChild(rules);
  document.getElementsByTagName("head")[0].appendChild(cssAnimation);
};



// Select all the divs inside .container2
let divs = document.querySelectorAll('.container2 > div');

// Loop through each div
divs.forEach((div) => {
    // Add event listener for mouseenter (hover)
    div.addEventListener('mouseenter', function() {
        // Change the grid-template-columns to 1fr 1fr
        this.style.gridTemplateColumns = '1fr 1fr';
        // Make the .content div appear
        this.querySelector('.content').style.display = 'flex';
    });

    // Add event listener for mouseleave (unhover)
    div.addEventListener('mouseleave', function() {
        // Change the grid-template-columns to 1fr
        this.style.gridTemplateColumns = '1fr';
        // Make the .content div disappear
        this.querySelector('.content').style.display = 'none';
    });
});



// Add this JavaScript code to a new file named script.js

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var images = document.querySelectorAll(".gall-grid img");

images.forEach(function(img) {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
}

// Close modal when clicking outside the image
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

