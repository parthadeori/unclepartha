const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation li");

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});
