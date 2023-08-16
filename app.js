//!swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar");

const navbarLinks = document.querySelectorAll('.navbar a');

if (navbarLinks) {
  navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Tüm aktif linklerin aktif sınıfını kaldır
      navbarLinks.forEach(navLink => navLink.classList.remove('home-active'));

      // Tıklanan linkin aktif sınıfını ekle
      this.classList.add('home-active');
    });
  });
}
