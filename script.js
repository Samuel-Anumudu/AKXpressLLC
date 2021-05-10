// DOM selectors
const nav = document.querySelector(".nav");
const activeSlide = document.querySelector(".hero");
const slideOne = document.querySelector(".slide__one");
const slideTwo = document.querySelector(".slide__two");
const btnScrollToTop = document.querySelector(".btnScrollToTop");
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
const aboutUs = document.querySelector(".about");

// Toggle hamburger to show when in mobile
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Add click event with jQuery to mouse icon-scroll which goes bottom when user clicks
$(document).ready(function () {
  $(".icon-scroll").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
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

// Listen for navigation scroll
window.addEventListener("scroll", fixNav);
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// slider functions !!!

function removeActive() {
  activeSlide.classList.remove("active__slide");
}

function addActive() {
  activeSlide.classList.add("active__slide");
}

function addActiveToSlideOne() {
  slideOne.classList.add("active__slide");
}

function removeActiveFromSlideOne() {
  slideOne.classList.remove("active__slide");
}

function addActiveToSlideTwo() {
  slideTwo.classList.add("active__slide");
}

function removeActiveFromSlideTwo() {
  slideTwo.classList.remove("active__slide");
}

// Make slider repeat

function repeat() {
  if (activeSlide.classList.contains("active__slide")) {
    setTimeout(function () {
      removeActive();
      addActiveToSlideOne();

      if (slideOne.classList.contains("active__slide")) {
        setTimeout(function () {
          removeActiveFromSlideOne();
          addActiveToSlideTwo();

          if (slideTwo.classList.contains("active__slide")) {
            setTimeout(function () {
              removeActiveFromSlideTwo();
              addActive();
            }, 4000);
          }
        }, 3500);
      }
    }, 6000);
  }
}

repeat();

// refresh repeat function so it keeps running
function refreshData() {
  var x = 5; // 5 Seconds

  repeat();

  setTimeout(refreshData, x * 3000);
}

refreshData(); // execute function
