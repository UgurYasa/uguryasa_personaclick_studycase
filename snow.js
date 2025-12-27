const snowLayer = document.querySelector(".snow-layer");

function snowFall() {
  const snow = document.createElement("i");
  snow.className = "fa-notdog fa-solid fa-snowflake snowflake";

  const size = Math.random() * 10 + 8; // küçük kar
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 5 + 6;

  snow.style.fontSize = size + "px";
  snow.style.left = startX + "px";
  snow.style.animationDuration = duration + "s";

  snowLayer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, duration * 1000);
}

// sürekli yağsın
setInterval(snowFall, 180);
