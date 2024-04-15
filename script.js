const dinosaurio = document.querySelector(".dinosaurio");
const suelo = document.querySelector(".suelo");
const cactus = document.querySelector(".cactus");
const puntuacion = document.querySelector(".puntuacion");

let velocidad = 10;
let posicionDinosaurio = 200;
let posicionCactus = 300;
let intervaloSalto;
let intervaloMovimientoCactus;

function salto() {
  clearInterval(intervaloSalto);
  let alturaSalto = 100;
  intervaloSalto = setInterval(() => {
    if (posicionDinosaurio < 200 + alturaSalto) {
      posicionDinosaurio += 5;
      dinosaurio.style.bottom = ${posicionDinosaurio}px;
    } else {
      clearInterval(intervaloSalto);
      intervaloSalto = setInterval(() => {
        if (posicionDinosaurio > 200) {
          posicionDinosaurio -= 5;
          dinosaurio.style.bottom = ${posicionDinosaurio}px;
        } else {
          clearInterval(intervaloSalto);
        }
      }, 20);
    }
  }, 20);
}

function descenso() {
  clearInterval(intervaloSalto);
  intervaloSalto = setInterval(() => {
    if (posicionDinosaurio > 50) {
      posicionDinosaurio -= 5;
      dinosaurio.style.bottom = ${posicionDinosaurio}px;
    } else {
      clearInterval(intervaloSalto);
    }
  }, 20);
}

window.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowUp" || evento.key === " ") {
    salto();
  }
});

window.addEventListener("keyup", (evento) => {
  if (evento.key === "ArrowUp" || evento.key === " ") {
    descenso();
  }
});

intervaloMovimientoCactus = setInterval(() => {
  posicionCactus -= velocidad;
  if (posicionCactus < -50) {
    posicionCactus = 300;
    puntuacion.textContent++;
  }
  cactus.style.left = ${posicionCactus}px;

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
}, 50);

const dinosaurio = document.querySelector(".dinosaurio");
const puntuacion = document.querySelector(".puntuacion");

let posicionDinosaurio = 200;
let intervaloSalto;

function salto() {
  clearInterval(intervaloSalto);
  let alturaSalto = 100;
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
    salto();
  }
});

// Manejar eventos táctiles para dispositivos móviles
window.addEventListener("touchstart", () => {
  salto();
});

// Generar cactus estáticos al inicio del juego
const cactusArray = document.querySelectorAll(".cactus");
let leftPosition = 100;
cactusArray.forEach((cactus) => {
  cactus.style.left = `${leftPosition}%`;
  leftPosition += 20; // Espacio entre cactus
});


// const dinosaurio = document.querySelector(".dinosaurio");
// const puntuacion = document.querySelector(".puntuacion");

// let posicionDinosaurio = 200;
// let intervaloSalto;

// function salto() {
//   clearInterval(intervaloSalto);
//   let alturaSalto = 100;
//   intervaloSalto = setInterval(() => {
//     if (posicionDinosaurio < 200 + alturaSalto) {
//       posicionDinosaurio += 5;
//       dinosaurio.style.bottom = `${posicionDinosaurio}px`;
//     } else {
//       clearInterval(intervaloSalto);
//       intervaloSalto = setInterval(() => {
//         if (posicionDinosaurio > 200) {
//           posicionDinosaurio -= 5;
//           dinosaurio.style.bottom = `${posicionDinosaurio}px`;
//         } else {
//           clearInterval(intervaloSalto);
//         }
//       }, 20);
//     }
//   }, 20);
// }

// window.addEventListener("keydown", (evento) => {
//   if (evento.key === "ArrowUp" || evento.key === " ") {
//     salto();
//   }
// });

// // Generar cactus estáticos al inicio del juego
// const cactusArray = document.querySelectorAll(".cactus");
// let leftPosition = 100;
// cactusArray.forEach((cactus) => {
//   cactus.style.left = `${leftPosition}%`;
//   leftPosition += 20; // Espacio entre cactus
// });
