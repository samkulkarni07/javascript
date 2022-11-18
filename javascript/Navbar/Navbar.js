// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navtoggle.addEventListener("click", function () {
  links.classList.toggle("show");
});
