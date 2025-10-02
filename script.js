// === DARK MODE TOGGLE ===
const toggle = document.getElementById("toggle");
const body = document.body;

function applyTheme() {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
}

// Run on load and when toggled
applyTheme();
toggle.addEventListener("change", applyTheme);

// === SCROLL REVEAL ===
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// === ACTIVE NAVIGATION HIGHLIGHT ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav.main-nav ul li a");

function setActiveLink() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

window.addEventListener("scroll", setActiveLink);

// === MOBILE NAVIGATION TOGGLE ===
const navToggle = document.createElement("button");
navToggle.className = "nav-toggle";
navToggle.setAttribute("aria-label", "Toggle navigation");
navToggle.innerHTML = '<span class="hamburger"></span>';

document.querySelector("header.main-header").prepend(navToggle);

const navMenu = document.querySelector("nav.main-nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");
  navToggle.classList.toggle("is-active");
});

// Close menu on link click (mobile)
navLinks.forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-active");
    navToggle.classList.remove("is-active");
  })
);
