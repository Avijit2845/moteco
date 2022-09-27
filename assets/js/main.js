$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
            $("#FixedScrol").addClass("headerFixed");
        } else {
            $("#FixedScrol").removeClass("headerFixed");
            $(".up_icon").removeClass("up_iconFixd");
        }
    });

    // counting ja //
    jQuery(document).ready(function($) {
        $('.counting').counterUp({
            delay: 20,
            time: 3000
        });
    });
  
}); 

function openLBmodal() {
  document.getElementById("lightBox-Model").style.display = "block";
}

function closeLBmodal() {
  document.getElementById("lightBox-Model").style.display = "none";
}

var slideLBindex = 1;
showLBslides(slideLBindex);

function plusLBslides(n) {
  showLBslides(slideLBindex += n);
}

function currentLBslide(n) {
  showLBslides(slideLBindex = n);
}

function showLBslides(n) {
  var i;
  var slides = document.getElementsByClassName("boxSlides");
  var dots = document.getElementsByClassName("box-img");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideLBindex = 1}
  if (n < 1) {slideLBindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideLBindex-1].style.display = "block";
  dots[slideLBindex-1].className += " active";
  captionText.innerHTML = dots[slideLBindex-1].alt;
} 
/* =============WOW JS==========*/
// new WOW().init();
