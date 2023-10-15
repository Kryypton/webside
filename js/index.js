let currentX = 50;
let currentY = 20;
let deltaX = 0.1; // Réduction de la vitesse de déplacement horizontale
let deltaY = 0.05; // Réduction de la vitesse de déplacement verticale
let opacity = 1;
let decreasing = true;

const bodyElement = document.body;
const h1Element = document.querySelector('.attention-grabber h1');
const pElement = document.querySelector('.attention-grabber p');
const imgElement = document.querySelector('.attention-grabber img');

function setGradient() {
    bodyElement.style.backgroundImage = `radial-gradient(circle at ${currentX}% ${currentY}%, rgba(0, 124, 124, ${opacity}), #16113A)`;
}

function updateGradientPosition() {
    currentX += deltaX;
    currentY += deltaY;

    if (currentX > 60 || currentX < 20) {
        deltaX = -deltaX;
    }
    if (currentY > 30 || currentY < 20) {
        deltaY = -deltaY;
    }

    setGradient();
}

function adjustOpacity() {
    if (Math.random() > 0.5) {
        decreasing = !decreasing;
    }

    if (decreasing) {
        opacity -= 0.01; // Réduction de la vitesse de changement d'opacité
    } else {
        opacity += 0.01;
    }

    opacity = Math.max(1, Math.min(2, opacity));
    setGradient();
}

function adjustFontSize() {
    var imageHeight = imgElement.offsetHeight;
    
    var fontSize = 2 * imageHeight;
    
    h1Element.style.fontSize = fontSize + "%";
    pElement.style.fontSize = fontSize / 8 + "%";
}

window.onload = adjustFontSize;
window.addEventListener('resize', adjustFontSize);

function loop() {
    updateGradientPosition();
    adjustOpacity();
    setTimeout(() => {
        requestAnimationFrame(loop);
    }, 30);
}

requestAnimationFrame(loop);

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    
    if (window.scrollY >= 200) {
      header.style.backgroundColor = "#0f0b2980";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
  