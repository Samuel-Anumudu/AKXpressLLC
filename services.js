const contactNav = document.querySelector(".service-nav");
const hamburger = document.querySelector(".hamburger");
const btnScrollToTop = document.querySelector(".btnScrollToTop");
const navUl = document.querySelector(".service-nav-ul");
window.addEventListener("scroll", fixContactNav);

// Listen for navigation scroll
function fixContactNav() {
  if (window.scrollY > contactNav.offsetHeight + 150) {
    contactNav.classList.add("main");
  } else {
    contactNav.classList.remove("main");
  }
}

// Toggle hamburger to show when in mobile
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Add event listener to the btnScrollToTop using jQuery
btnScrollToTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

// Add event listener to turn button off or stop displaying when it reaches a maximum height
window.addEventListener("scroll", btnOff);

// Function Turn off Button Style
function btnOff() {
  if (window.scrollY < btnScrollToTop.offsetHeight + 150) {
    btnScrollToTop.style.display = "none";
  } else {
    btnScrollToTop.style.display = "block";
  }
}
