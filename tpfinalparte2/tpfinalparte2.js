let txt, fuente;
let jugador = new personaje();
let pantalla = new pantallas();
let botones = [];


function preload () {
  txt = loadStrings ('texto.txt');
  fuente = loadFont('PORKYS.TTF');
  pantalla.cargar();
}

function setup () {
  createCanvas (640, 480);
  background(250);
  cursor('shurikenCursor.png');
    crearBotones();
}

function draw () {
  fill (255,0,0);
  textSize(20);
  text ("pantalla:" + pantalla.p, 10, 10);
 pantalla.mostrar();
  botonesPantalla();

}

function keyPressed() {
  jugador.mover();

  //prueba para ver como cambiar p en botones, usar esto pero en botones xd

  if (keyCode === LEFT_ARROW ) {
    pantalla.p = "juego";
  }
}
