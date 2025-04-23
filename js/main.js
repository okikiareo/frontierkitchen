let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hide header on scroll down
  if (scrollTop > lastScrollTop && scrollTop > 500) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  // Change header background to white after scrollTop > 500
  if (scrollTop > 500) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  lastScrollTop = scrollTop;
});

const menuSwiper = new Swiper('.product_lists', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: { slidesPerView: 2 },  /* small tablets */
    768: { slidesPerView: 3 },  /* large tablets */
    1024: { slidesPerView: 4 }  /* desktop */
  }
});

const wrapper = document.querySelector('.scrolling-wrapper');
if (wrapper) {
  // duplicate its contents so we have two back-to-back sets
  wrapper.innerHTML += wrapper.innerHTML;
}