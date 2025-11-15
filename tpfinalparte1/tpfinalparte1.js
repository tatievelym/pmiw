/*Alumnos:
 Sokol Tobias Ezequiel 120375/9
 Tatiana montenegro 120347/4
 link al video:
 video Tobias: https://www.youtube.com/watch?v=JbHEH7bXYnU
 video de tatiana: https://youtu.be/pi6h6hrbV8E?si=KYLZMPETLsiL1ggN
 */

let fondoX = 640, fondoY = 480;
let txt, fuente;
let pantallas = [], estado = 'intro', p = 0;
const puntosDeDecision = [2, 4, 5, 10, 17]; //p de decision
let video, videoFinalB, videoFinalBR;
let tiempoInicio;
let duracionPantalla = 4000, duracionPantalla1 = 3500, duracionDecision = 2500;
let sonidoClic;

function preload() {
  txt = loadStrings ('texto.txt');
  cargarVideos();
  fuente = loadFont('PORKYS.TTF');
  sonidoClic = loadSound ('sonidos/sonidoDecision.mp3');
  sonidoClic.setVolume(0.1);
  for (let i=0; i<=19; i++) {
    let nombre = 'pantalla'+i+'.jpeg';
    pantallas.push(loadImage("imagenes/" + nombre));
  }
}

function setup() {
  createCanvas (fondoX, fondoY);

  round();
  tiempoInicio = millis();
  console.log(estado);
  console.log(pantallas.length);
}


function draw() {
  background(125);
  cursor('shurikenCursor.png');
  videos();
  pantalla();
  mostrarTextoJuego();
  console.log(estado, p, Math.round((millis())/1000));
}
