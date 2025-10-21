// ====== THEME TOGGLE ======
const btn = document.getElementById("themeBtn");
let darkMode = false;

btn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-theme", darkMode);
  btn.textContent = darkMode ? "Light Mode 🌞" : "Dark Mode 🌙";
});

// ====== TYPING EFFECT ======
window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("typingText");
  const body = document.getElementById("typingBody");
  const titleText = "About Me 👨‍💻";
  const bodyText = "I'm Simon Adedokun, an aspiring engineer and web developer passionate about building solutions that combine creativity, technology, and impact.";
  
  let i = 0, j = 0;

  function typeTitle() {
    if (i < titleText.length) {
      title.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 100);
    } else {
      setTimeout(typeBody, 300);
    }
  }

  function typeBody() {
    if (j < bodyText.length) {
      body.textContent += bodyText.charAt(j);
      j++;
      setTimeout(typeBody, 30);
    }
  }

  typeTitle();
});

// ====== SCROLL REVEAL ======
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
});
