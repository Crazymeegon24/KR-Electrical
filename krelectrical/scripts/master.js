"use strict";

// This block will run when the DOM is loaded (once elements exist)
window.addEventListener("DOMContentLoaded", () => {

    // When the user scrolls the page, execute myFunction
//window.onscroll = function() {navFunction()};

// Get the header
//var header = document.querySelector("header");

// Get the offset position of the navbar
//var sticky = header.offset().top;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
/*function navFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}*/

window.onscroll = function() {scrollFunction()};

var toScroll;

document.getElementById('hero') ? toScroll = document.getElementById('hero') : toScroll = document.getElementById('head');

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toScroll.style.height = "15em";
  } else {
    toScroll.style.height = "25em";
  }
}

const button = document.getElementById("icon");

button.addEventListener("click", (e) =>{
  var x = document.querySelector("nav");
  x.classList.toggle("responsive");
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

});