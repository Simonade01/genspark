// ====== THEME TOGGLE ======
const btn = document.getElementById("themeBtn");
let darkMode = false;

btn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-theme", darkMode);
  btn.textContent = darkMode ? "Light Mode 🌞" : "Dark Mode 🌙";
});

// ====== PROJECT MODAL DATA ======
const projects = {
  genspark: {
    title: "GenSpark — AI Idea Generator",
    image: "https://picsum.photos/seed/gen/1200/700",
    text: "GenSpark generates creative prompts by category. Built with vanilla JS and lightweight UI. Demo simulates generative behavior using arrays and filtering logic.",
    code: "#" // Replace with your GitHub URL later
  },
  colorChanger: {
    title: "Color Changer — Random Background App",
    image: "https://picsum.photos/seed/color/1200/700",
    text: "A web app that randomly changes the background color when you click the button. Built to deepen my JavaScript and DOM skills.",
    code: "https://github.com/Simonade01/color-changer"
  }
};

// ====== MODAL ELEMENTS ======
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalCode = document.getElementById("modalCode");
const modalClose = document.getElementById("modalClose");

// ====== OPEN MODAL ======
document.querySelectorAll(".viewBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    const p = projects[key];
    if (!p) return;
    modalImage.src = p.image;
    modalTitle.textContent = p.title;
    modalText.textContent = p.text;
    modalCode.href = p.code;
    modal.className = "modal-visible";
  });
});

// ====== CLOSE MODAL ======
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.className = "modal-hidden";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.className = "modal-hidden";
  });
}

// ====== TYPING EFFECT ======
window.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typingText");
  if (!typingText) return;

  const text = "About Me 👨‍💻";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    }
  }

  typeWriter();
});
