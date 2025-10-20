const btn = document.getElementById("themeBtn");
let darkMode = false;

btn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "#f4f4f9";
  document.body.style.color = darkMode ? "#fff" : "#333";
  btn.textContent = darkMode ? "Light Mode" : "Dark Mode";
});
// Simple modal data for projects
const projects = {
  genspark: {
    title: "GenSpark — AI Idea Generator",
    image: "https://picsum.photos/seed/gen/1200/700",
    text: "GenSpark generates creative prompts by category. Built with vanilla JS and lightweight UI. Demo simulates generative behavior using arrays and filtering logic.",
    code: "#" // replace with your GitHub URL later
  }
};
projects.colorChanger = {
  title: "Color Changer — Random Background App",
  image: "https://picsum.photos/seed/color/1200/700",
  text: "A web app that randomly changes the background color when you click the button. Built to deepen my JavaScript and DOM skills.",
  code: "https://github.com/Simonade01/color-changer"
};

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalCode = document.getElementById("modalCode");
const modalClose = document.getElementById("modalClose");

// open modal when clicking view buttons
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

// close modal
modalClose.addEventListener("click", () => modal.className = "modal-hidden");
// click outside modal to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.className = "modal-hidden";
});

