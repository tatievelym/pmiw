let pantalla = 1;
let nave, balas = [], fragmentos = [], obstáculos = [];
let juegoTerminado = false;
let gano = false;
let botonComenzar, botonCreditos, botonInstrucciones, botonVolver;
let imagenes = {};




function setup() {
  createCanvas(640, 480);
  crearBotones();
  iniciarJuego();
}

function draw() {
  if (pantalla === 1) {
    image(imagenes["inicio"], 0, 0, width, height);
    mostrarPantallaInicial();
  } else if (pantalla === 2) {
    image(imagenes["juego"], 0, 0, width, height);
    actualizarJuego();
  } else if (pantalla === 3) {
    image(imagenes["creditos"], 0, 0, width, height);
    mostrarPantallaCreditos();
  } else if (pantalla === 4) {
    image(imagenes["instrucciones"], 0, 0, width, height);
    mostrarPantallaInstrucciones();
  }
}
