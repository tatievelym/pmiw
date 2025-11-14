let txt, fuente;
let jugador = new personaje();
let pantalla = new pantallas();

function preload () {
  txt = loadStrings ('texto.txt');
  fuente = loadFont('PORKYS.TTF');
  pantalla.cargar();
}

function setup () {
  createCanvas (640, 480);
  background(250);
  cursor('shurikenCursor.png');
}

function draw () {
  pantalla.mostrar();
}

function keyPressed() {
  jugador.mover();
  if (keyCode === LEFT_ARROW ) {
    pantalla.p = "juego";
  }
}
