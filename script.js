const heartsLayer = document.getElementById("hearts");
const HEARTS = ["💗", "💕", "💖", "💓", "💞", "🌸", "✨"];

function spawnHeart(x = Math.random() * 100, size = 0.8 + Math.random() * 1.4) {
  if (!heartsLayer) return;
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

const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

document.querySelectorAll(".reveal").forEach((el, i) => {
  window.setTimeout(() => el.classList.add("in"), 80 + i * 70);
});

window.setInterval(() => {
  if (document.hidden) return;
  spawnHeart(Math.random() * 100, 0.7 + Math.random());
}, 1400);

const heartRainBtn = document.getElementById("heartRainBtn");
if (heartRainBtn) {
  heartRainBtn.addEventListener("click", () => softRain(36));
  softRain(12);
}
