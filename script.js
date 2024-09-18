// Burger Menu

const burgerMenuButton = document.querySelector("#burgerButton");
const burgerMenu = document.querySelector("#burgerMenu");

burgerMenuButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu__active");
  burgerMenuButton.classList.toggle("burger-button__active");
});



// Slider
const rewardsSwiper = new Swiper(".rewards__swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    666: {
      slidesPerView: 2,
    },
    1410: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
