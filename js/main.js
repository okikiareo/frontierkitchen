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
