let currentX = 20; // Position de départ en pourcentage
let currentY = 20;
let deltaX = 0.5; // Vitesse initiale
let deltaY = 0.3;
let opacity = 1;  // Opacité initiale
let decreasing = true; // Pour savoir si l'opacité diminue ou augmente
 
function setGradient() {
  document.body.style.backgroundImage = `radial-gradient(circle at ${currentX}% ${currentY}%, rgba(2, 136, 135, ${opacity}), #16113A)`;
}

function updateGradientPosition() {
  // Mettre à jour les positions X et Y
  currentX += deltaX;
  currentY += deltaY;

  // Si la position atteint une limite, renversez la direction du mouvement
  if (currentX > 60 || currentX < 20) {
      deltaX = -deltaX;
  }
  if (currentY > 30 || currentY < 20) {
      deltaY = -deltaY;
  }

  // Appliquer le nouveau gradient
  setGradient();
}

function adjustOpacity() {
  if (Math.random() > 0.5) {  // 50% de chance de changer la direction de l'opacité
      decreasing = !decreasing;
  }

  if (decreasing) {
      opacity -= Math.random() * 0.02;  // Diminuer l'opacité de manière aléatoire jusqu'à 0.02
      if (opacity <= 0.9) {
          decreasing = false;
      }
  } else {
      opacity += Math.random() * 0.02;  // Augmenter l'opacité de manière aléatoire jusqu'à 0.02
      if (opacity >= 1) {
          decreasing = true;
      }
  }
  setGradient();
}

// Mettre à jour la position du dégradé à intervalles réguliers (par exemple, 30ms pour un mouvement lisse)
setInterval(updateGradientPosition, 150);
setInterval(adjustOpacity, 100);