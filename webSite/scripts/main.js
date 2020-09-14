const header = document.querySelector(".header");

// Header
function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 1) {
    header.classList.add("header__back");
  } else {
    header.classList.remove("header__back");
  }
}

window.addEventListener("scroll", function () {
  checkScroll();
});
document.addEventListener("DOMContentLoaded", checkScroll);

// Citations https://kenwheeler.github.io/slick/
let slider = $("#citationsSlider");

slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true,
});
