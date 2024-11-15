// montenegro evelyn comision 5


let imagenes = [];
let pantallaActual = 1;
let texto = [];
let sonido

function preload() {
  for (let i = 0; i <= 15; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.png');
  }
  texto=loadStrings('data/Texto.txt');
  sonido=loadSound('data/sonido.mp3');
}
function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  if (pantallaActual > 1 && pantallaActual <= 15) {
    image(imagenes[pantallaActual -1], 0, 0, width, height);
  }
  pantallaInicio()
  pantallasBoton()
  pantallasBotonSig()
  pantallasDecision()
}
