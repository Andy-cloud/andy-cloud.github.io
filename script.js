let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];
window.addEventListener("scroll", function(e) {
  let fromTop = window.scrollY;

  console.log("ahoj");
  console.log(mainNavLinks.forEach(link => {link.hash}))
  mainNavLinks.forEach(link => {
      console.log("tu")
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});