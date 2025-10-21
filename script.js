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
window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("typingText");
  const body = document.getElementById("typingBody");

  const headerText = "About Me 👨‍💻";
  const bodyText = "I'm an aspiring engineer passionate about renewable energy, design, and innovation.";

  let i = 0;
  let j = 0;

  function typeHeader() {
    if (i < headerText.length) {
      header.textContent += headerText.charAt(i);
      i++;
      setTimeout(typeHeader, 100);
    } else {
      setTimeout(typeBody, 500); // small pause before typing body
    }
  }

  function typeBody() {
    if (j < bodyText.length) {
      body.textContent += bodyText.charAt(j);
      j++;
      setTimeout(typeBody, 50);
    }
  }

  typeHeader();
});

