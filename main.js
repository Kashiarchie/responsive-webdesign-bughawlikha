const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("#navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
})
// Home page
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".cta-button", {
  ...scrollRevealOption,
  delay: 1500,
  scale: 1.1,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 2000,
});

// About Us Page
ScrollReveal().reveal(".about-info h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about-info p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".team-section h1", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".home-container", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".profile-card img", {
  ...scrollRevealOption,
  delay: 1000,
});

// Product Page
ScrollReveal().reveal(".product-overview h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".product-overview p", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".product-image img", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".product-screenshots", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".product-screenshots h2", {
  ...scrollRevealOption,
  delay: 650,
});
ScrollReveal().reveal(".screenshots img", {
  ...scrollRevealOption,
  delay: 800,
});
ScrollReveal().reveal(".product-features h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".product-features ul li", {
  ...scrollRevealOption,
  delay: 1200,
});

//Contact page
ScrollReveal().reveal(".contact-section h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".contact-section p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".contact-section form", {
  ...scrollRevealOption,
  delay: 1000,
});
