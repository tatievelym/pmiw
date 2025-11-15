let jugador = new personaje();
let pantalla = new pantallas();
let boton = new Boton();
let juego;

function preload () {
  pantalla.cargar();
}

function setup () {
  createCanvas (640, 480);
  cursor('shurikenCursor.png');
  juego = new Juego()
    juego.iniciar();
  boton.crearBotones();
}

function draw () {
  pantalla.dibujar();
  boton.botonesPantalla();

}

function keyPressed() {
  if (pantalla.p === 'juego') {
    jugador.mover();
  }
}


function mouseReleased() {
  boton.cambioPantalla();
}
