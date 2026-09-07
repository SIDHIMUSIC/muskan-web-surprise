const heartsLayer = document.getElementById("hearts");
const revealBtn = document.getElementById("revealBtn");
const surprise = document.getElementById("surprise");
const heartRainBtn = document.getElementById("heartRainBtn");

const HEARTS = ["💗", "💕", "💖", "💓", "💞", "🌸", "✨"];

function spawnHeart(x = Math.random() * 100, size = 0.8 + Math.random() * 1.4) {
  const el = document.createElement("span");
  el.className = "floating-heart";
  el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
  el.style.left = `${x}%`;
  el.style.fontSize = `${size}rem`;
  el.style.animationDuration = `${4 + Math.random() * 4}s`;
  heartsLayer.appendChild(el);
  window.setTimeout(() => el.remove(), 8500);
}

function softRain(count = 18) {
  for (let i = 0; i < count; i += 1) {
    window.setTimeout(() => spawnHeart(), i * 70);
  }
}

revealBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  revealBtn.textContent = "Surprise unlocked ✨";
  revealBtn.disabled = true;
  softRain(24);
  surprise.scrollIntoView({ behavior: "smooth", block: "start" });
});

heartRainBtn.addEventListener("click", () => softRain(36));

// gentle ambient hearts
window.setInterval(() => {
  if (document.hidden) return;
  spawnHeart(Math.random() * 100, 0.7 + Math.random());
}, 1400);
