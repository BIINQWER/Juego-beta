const dinosaurio = document.querySelector(".dinosaurio");
const puntuacion = document.querySelector(".puntuacion");

let posicionDinosaurio = 200;
let intervaloSalto;
let intervaloDescenso;
let intervaloMovimientoCactus;

function tocarPantalla(evento) {
  evento.preventDefault();
  let posicionY = evento.touches[0].clientY;
  let alturaPantalla = window.innerHeight;
  let posicionDinosaurio = alturaPantalla - posicionY - 100;

  if (posicionDinosaurio >= 50) {
    dinosaurio.style.bottom = `${posicionDinosaurio}px`;
  } else {
    posicionDinosaurio = 50;
    dinosaurio.style.bottom = `${posicionDinosaurio}px`;
  }

  salto();
}

window.addEventListener("touchstart", tocarPantalla);
window.addEventListener("touchmove", tocarPantalla);

function salto() {
  clearInterval(intervaloSalto);
  clearInterval(intervaloDescenso);
  let alturaSalto = 100;
  intervaloSalto = setInterval(() => {
    if (posicionDinosaurio < 200 + alturaSalto) {
      posicionDinosaurio += 5;
      dinosaurio.style.bottom = `${posicionDinosaurio}px`;
    } else {
      clearInterval(intervaloSalto);
      intervaloDescenso = setInterval(() => {
        if (posicionDinosaurio > 50) {
          posicionDinosaurio -= 5;
          dinosaurio.style.bottom = `${posicionDinosaurio}px`;
        } else {
          clearInterval(intervaloDescenso);
        }
      }, 20);
    }
  }, 20);
}

// Generar cactus estáticos al inicio del juego
const cactusArray = document.querySelectorAll(".cactus");

function moverCactus() {
  let velocidad = 10;
  cactusArray.forEach((cactus) => {
    let posicionCactus = parseInt(cactus.style.left) || 600;
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
      posicionCactus = 600; 
      puntuacion.textContent++;
    }
  });
}

// Ejecutar el movimiento de los cactus continuamente
intervaloMovimientoCactus = setInterval(moverCactus, 50);
