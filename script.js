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
