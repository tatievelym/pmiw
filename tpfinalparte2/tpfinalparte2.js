let fondoX = 640, fondoY = 480; 
let imagenes;
let txt, fuente;
let pantallas = [];

function preload (){
  txt = loadStrings ('texto.txt');
fuente = loadFont('PORKYS.TTF');
  for (let i=0; i<=2; i++) {
let nombre = 'pantalla'+i+'.jpeg';
  imagenes = loadImage('data/inicio.jpg');
  }
}

function setup () {
  createCanvas (fondoX, fondoY);
   background(250);
   cursor('shurikenCursor.png');
  
     
}

function draw () {

  image(imagenes, fondoX, fondoY);
}
