const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");

function randomColor() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomHex.padStart(6, "0")}`;
}

changeColorBtn.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  colorBox.textContent = newColor;
  colorBox.style.backgroundColor = newColor;

  // Adjust text color for contrast
  const brightness = parseInt(newColor.slice(1, 3), 16) * 0.299 +
                     parseInt(newColor.slice(3, 5), 16) * 0.587 +
                     parseInt(newColor.slice(5, 7), 16) * 0.114;
  colorBox.style.color = brightness > 150 ? "#000" : "#fff";
});
