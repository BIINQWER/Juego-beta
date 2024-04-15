const dinosaurio = document.querySelector(".dinosaurio");
const puntuacion = document.querySelector(".puntuacion");

let posicionDinosaurio = 200;
let intervaloSalto;

function salto(evento) {
  clearInterval(intervaloSalto);
  let alturaSalto = 100;

  if (evento.type === "click") {
    posicionDinosaurio += 50;
  }

  intervaloSalto = setInterval(() => {
    if (posicionDinosaurio < 200 + alturaSalto) {
      posicionDinosaurio += 5;
      dinosaurio.style.bottom = `${posicionDinosaurio}px`;
    } else {
      clearInterval(intervaloSalto);
      intervaloSalto = setInterval(() => {
        if (posicionDinosaurio > 200) {
          posicionDinosaurio -= 5;
          dinosaurio.style.bottom = `${posicionDinosaurio}px`;
        } else {
          clearInterval(intervaloSalto);
        }
      }, 20);
    }
  }, 20);
}

window.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowUp" || evento.key === " ") {
    salto(evento);
  }
});

// Manejar eventos táctiles para dispositivos móviles
window.addEventListener("touchstart", (evento) => {
  salto(evento);
});

// Generar cactus estáticos al inicio del juego
const cactusArray = document.querySelectorAll(".cactus");
let posicionInicialCactus = 600;

function moverCactus() {
  let velocidad = 10;
  cactusArray.forEach((cactus, index) => {
    let posicionCactus = posicionInicialCactus - (index * 150); // Ajustamos la posición inicial de cada cactus
    posicionCactus -= velocidad;
    cactus.style.left = `${posicionCactus}px`;

    let dinosaurioRect = dinosaurio.getBoundingClientRect();
    let cactusRect = cactus.getBoundingClientRect();

    if (
      dinosaurioRect.right > cactusRect.left &&
      dinosaurioRect.left < cactusRect.right &&
      dinosaurioRect.bottom > cactusRect.top &&
      dinosaurioRect.top < cactusRect.bottom
    ) {
      clearInterval(intervaloMovimientoCactus);
      alert("¡Game Over!");
    }

    if (posicionCactus < -50) {
      posicionCactus = posicionInicialCactus - (index * 150); // Reiniciamos la posición del cactus
      puntuacion.textContent++;
    }
  });
}

// Ejecutar el movimiento de los cactus continuamente
let intervaloMovimientoCactus = setInterval(moverCactus, 50);

// Descenso automático del dinosaurio
function descenso() {
  clearInterval(intervaloSalto);
  intervaloSalto = setInterval(() => {
    if (posicionDinosaurio > 50) {
      posicionDinosaurio -= 5;
      dinosaurio.style.bottom = `${posicionDinosaurio}px`;
    } else {
      clearInterval(intervaloSalto);
    }
  }, 20);
}

// Agregar evento de clic para el mouse
dinosaurio.addEventListener("click", salto);

// Descenso automático al levantar la tecla de salto
window.addEventListener("keyup", (evento) => {
  if (evento.key === "ArrowUp" || evento.key === " ") {
    descenso();
  }
});
