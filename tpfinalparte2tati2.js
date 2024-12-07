let pantalla = 1;
let camara, fantasmas = [], capturas = [];
let juegoTerminado = false;
let gano = false;
let imagenes = [];
let botonComenzar, botonCreditos, botonVolver;
let sonido;

function preload() {
  imagenes["inicio"] = loadImage("data/inicio.jpg");
  imagenes["juego"] = loadImage("data/juego.jpg");
  imagenes["creditos"] = loadImage("data/creditos.jpg");
  imagenes["camara"] = loadImage("data/camara.jpg");
  imagenes["fantasma"] = loadImage("data/fantasma.jpg");
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantallas = new Pantalla();
  juego = new Juego();

}

function draw() {
  pantallas.mostrarPantallas();
}
