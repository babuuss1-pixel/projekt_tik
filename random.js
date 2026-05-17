// ==========================
// RANDOM FEATURE SCRIPT
// ==========================

// This script adds extra interactivity to the NGO project
// Feature: random quotes + random accent color change

const quotes = [
  "OJQ-të ndryshojnë botën përmes veprave të vogla por të mëdha.",
  "Bashkëpunimi krijon ndryshim të vërtetë në shoqëri.",
  "Ndihma humanitare nuk njeh kufij.",
  "Çdo veprim vullnetar ka një ndikim global.",
  "Një botë më e mirë fillon me një komunitet të fortë."
];

// Create floating button
const randomBtn = document.createElement('button');
randomBtn.innerText = "✨ Surprizë";
randomBtn.style.position = "fixed";
randomBtn.style.bottom = "20px";
randomBtn.style.right = "20px";
randomBtn.style.padding = "12px 18px";
randomBtn.style.border = "none";
randomBtn.style.borderRadius = "30px";
randomBtn.style.cursor = "pointer";
randomBtn.style.background = "#38bdf8";
randomBtn.style.color = "white";
randomBtn.style.fontWeight = "bold";
randomBtn.style.zIndex = "9999";

// Create popup message box
const popup = document.createElement('div');
popup.style.position = "fixed";
popup.style.top = "20px";
popup.style.left = "50%";
popup.style.transform = "translateX(-50%)";
popup.style.background = "#1e293b";
popup.style.color = "white";
popup.style.padding = "15px 25px";
popup.style.borderRadius = "15px";
popup.style.display = "none";
popup.style.zIndex = "10000";
popup.style.maxWidth = "400px";
popup.style.textAlign = "center";
popup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

document.body.appendChild(randomBtn);
document.body.appendChild(popup);

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
  const colors = ["#38bdf8", "#2563eb", "#22c55e", "#f97316", "#a855f7"];
  return colors[Math.floor(Math.random() * colors.length)];
}

randomBtn.addEventListener('click', () => {
  const quote = getRandomQuote();
  const color = getRandomColor();

  popup.innerText = quote;
  popup.style.display = "block";
  popup.style.border = "2px solid " + color;

  document.documentElement.style.setProperty('--primary', color);

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
});