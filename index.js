function close_nav() {
  document.getElementById("side-menu").style.width = "0";
}

function open_nav() {
  document.getElementById("side-menu").style.width = "250px";
}

var slideIndex = 0;
slideshow();

function slideshow() {
  var i;
  var slides = document.getElementsByClassName("corousel-image");
  // console.log(slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  console.log(slideIndex);
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  setTimeout(slideshow, 2000);
}
