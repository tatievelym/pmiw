let pantalla = 1;
let nave, enemigos = [], balas = [];
let juegoTerminado = false;
let gano = false;
let imagenes = [];
let botonJugar, botonCreditos, botonVolver;
let sonido

function preload() {
  imagenes["inicio"] = loadImage("data/inicio.jpg");
  imagenes["juego"] = loadImage("data/juego.jpg");
  imagenes["creditos"] = loadImage("data/creditos.jpg");
  sonido=loadSound("data/sonido.mp3");
}

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
    if (keyIsPressed) {
      nave.teclaApretada();
    }
  } else if (pantalla === 3) {
    image(imagenes["creditos"], 0, 0, width, height);
    mostrarPantallaCreditos();
  }
}
