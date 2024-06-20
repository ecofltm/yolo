//header

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//footer

window.addEventListener('scroll', function() {
  let footer = document.getElementById('footer');
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;

  // Calculate the distance from the bottom of the page
  let distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

  // Set a threshold to determine when to show the footer
  let showFooterThreshold = 100; // Adjust as needed

  if (distanceFromBottom <= showFooterThreshold) {
      footer.classList.remove('slide-up');
  } else {
      footer.classList.add('slide-up');
  }
});
