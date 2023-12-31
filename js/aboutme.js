let currentX = 50;
let currentY = 20;
let deltaX = 0.1; // Réduction de la vitesse de déplacement horizontale
let deltaY = 0.05; // Réduction de la vitesse de déplacement verticale
let opacity = 1;
let decreasing = true;

const bodyElement = document.body;
const imageAttentionGrabber = document.querySelector(".attention-grabber img");

function setGradient() {
    bodyElement.style.backgroundImage = `radial-gradient(circle at ${currentX}% ${currentY}%, rgba(132, 27, 31, ${opacity}), #19123c)`;
}

function setUpAndDownAnimationImage() {
    setTimeout(() => {
        const imageAttentionGrabber = document.querySelector(".attention-grabber img");
        if (imageAttentionGrabber) {
            imageAttentionGrabber.style.animation = "upAndDown 3s ease-in-out infinite";
        }
    }, 750); 
}

window.onload = setUpAndDownAnimationImage;

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
  
setUpAndDownAnimationImage();