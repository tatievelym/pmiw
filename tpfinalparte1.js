// https://youtu.be/hYUgDQzBWMs
// montenegro evelyn comision 5

let imagenes = [];
let pantallaActual = 1;


function preload() {
  for (let i = 1; i <= 15; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.png'); 
}
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  
  image(imagenes[pantallaActual], 0, 0, width, height);
  
  // Mostrar texto según la pantalla actual
  fill(255);
  textSize(32);
  textAlign(CENTER);
  
  if (pantallaActual === 1) {
    text("FATAL FRAME", width / 2, height / 4);
    textSize(16);
    textAlign(CENTER);
    text("Este es un juego creado por Koei Tecmo,\n una compañía creada en 2009 a partir de la fusión\n de las compañías desarrolladoras de videojuegos y distribuidoras\n japonesas Tecmo y Koei.", width / 2, height / 3);
    textSize(30);
    textAlign(RIGHT);
    text("Alumna: Montenegro Tatiana", width - 10, height - 10);
    textAlign(CENTER);
    boton("Siguiente", width / 2, height - 60, 2);
  } else if (pantallaActual === 2) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Entre los residentes de los pueblos al pie del\n Monte Hikami una cierta habilidad única se\n ha transmitido a través de los tiempos.\nEsta habilidad es conocida como\n 'Lectura de Sombras', permite al usuario ver\n la sombra, o el 'rastro', de alguien que ha\n desaparecido en circunstancias inexplicables.\nYuri Kozukata, una mujer que posee\n la capacidad de leer las sombras, hacia\n una posada abandonada en el Monte Hikami.";
    text(texto, 10, 50, 620);
    boton("Siguiente", width / 2, height - 60, 3);
  } else if (pantallaActual === 3) {
    textSize(16);
    textAlign(LEFT);
    let texto = "A través de esta cámara podremos ver y capturar a los fantasmas que se encuentran aquí hace ya muchos años, tratarán de atacarte, ten cuidado!! Debemos capturar al menos a uno de ellos.";
    text(texto, 10, 50, 620);
    boton("Listo?", width / 2, height - 60, 4);
  } else if (pantallaActual === 4) {
    textSize(16);
    textAlign(LEFT);
    let texto = "En este pasillo hay dos habitaciones, en ambas habrán fantasmas. ¿Entrar primero al sótano?";
    text(texto, 10, 50, 620);
    dosBotones("SI", "NO", width / 2, height - 60, 5, 9);
  } else if (pantallaActual === 5) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Nos acercamos a esta habitación, parece no haber nadie, ¡entremos!!\n Pulsa siguiente para continuar.";
    text(texto, 10, 50, 620);
    boton("Siguiente", width / 2, height - 60, 6);
  } else if (pantallaActual === 6) {
    textSize(16);
    textAlign(LEFT);
    let texto = "¡Hay un fantasma aquí!! Hay que capturarlo o nos hará daño!! ¡Toma la cámara!!!";
    text(texto, 10, 50, 620);
    boton("Sacar cámara", width / 2, height - 60, 7);
  } else if (pantallaActual === 7) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Los Fragmentos de Espíritu se rompen cuando un fantasma recibe daño. Después de un tiempo, se reabsorben. Fotografía los fragmentos antes de que eso ocurra.";
    text(texto, 10, 50, 620);
    boton("Tomar foto", width / 2, height - 60, 8);
  } else if (pantallaActual === 8) {
    textSize(16);
    textAlign(LEFT);
    let texto = "¡Hemos logrado debilitar y capturar a este fantasma, lo has hecho muy bien!!";
    text(texto, 10, 50, 620);
    textAlign(RIGHT);
    textSize(12);
    text("Vuelve al principio a por una nueva aventura!!", width - 10, height - 10);
    textAlign(CENTER);
    boton("Volver", width / 2, height - 60, 1);  // Arreglo: vuelve a la pantalla principal
  } else if (pantallaActual === 9) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Dentro de este sótano hay muchos fantasmas, no podremos capturar a todos!! ¿Prefieres huir...?";
    text(texto, 10, 50, 620);
    dosBotones("SI", "NO", width / 2, height - 60, 14, 10);
  } else if (pantallaActual === 10) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Debes ser rápido, sino no podrás llegar a capturar a todos, ¡te llevarán con ellos!!";
    text(texto, 10, 50, 620);
    boton("Sacar cámara", width / 2, height - 60, 11);
  } else if (pantallaActual === 11) {
    textSize(16);
    textAlign(LEFT);
    let texto = "¡Se están acercando demasiado, están por alcanzarte!! ¡Vamos, vamos!!";
    text(texto, 10, 50, 620);
    boton("Siguiente", width / 2, height - 60, 12);
  } else if (pantallaActual === 12) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Han logrado alcanzarte, te han llevado con ellos, ahora tu espíritu rondará por este mismo monte hasta el final...";
    text(texto, 10, 50, 620);
    textAlign(RIGHT);
    textSize(12);
    text("Vuelve a intentarlo", width - 10, height - 10);
    textAlign(CENTER);
    boton("Siguiente", width / 2, height - 60, 13);
  } else if (pantallaActual === 13) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Corre por este pasillo hasta llegar al final, intentarán perseguirte, ¡no dejes que te atrapen!!";
    text(texto, 10, 50, 620);
    boton("Volver", width / 2, height - 60, 1);  // Arreglo: vuelve a la pantalla principal
  } else if (pantallaActual === 14) {
    textSize(16);
    textAlign(LEFT);
    let texto = "¡Estás fuera!! Los fantasmas ya no van a poder hacerte daño.";
    text(texto, 10, 50, 620);
    boton("Siguiente", width / 2, height - 60, 15);
  } else if (pantallaActual === 15) {
    textSize(16);
    textAlign(LEFT);
    let texto = "No has logrado el objetivo, debemos capturar al menos alguno, ¡vuelve a intentarlo, toma la decisión correcta!";
    text(texto, 10, 50, 620);
    boton("Siguiente", width / 2, height - 60, 16);
  } else if (pantallaActual === 16) {
    textSize(16);
    textAlign(LEFT);
    let texto = "Esta es la pantalla final. Gracias por jugar.";
    text(texto, 10, 50, 620);
    boton("Volver", width / 2, height - 60, 1);  
  }
}

function mousePressed() {
  if (pantallaActual === 1 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 2;
  } else if (pantallaActual === 2 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 3;
  } else if (pantallaActual === 3 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 4;
  } else if (pantallaActual === 4) {
    if (mouseDentroDeBoton(width / 2 - 120, height - 100, 100, 50)) {
      pantallaActual = 5;
    } else if (mouseDentroDeBoton(width / 2 + 20, height - 100, 100, 50)) {
      pantallaActual = 9;
    }
  } else if (pantallaActual === 5 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 6;
  } else if (pantallaActual === 6 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 7;
  } else if (pantallaActual === 7 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 8;
  } else if (pantallaActual === 8 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 1;  // Arreglo: volver a la pantalla principal
  } else if (pantallaActual === 9) {
    if (mouseDentroDeBoton(width / 2 - 120, height - 100, 100, 50)) {
      pantallaActual = 14;
    } else if (mouseDentroDeBoton(width / 2 + 20, height - 100, 100, 50)) {
      pantallaActual = 10;
    }
  } else if (pantallaActual === 10 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 11;
  } else if (pantallaActual === 11 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 12;
  } else if (pantallaActual === 12 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 13;
  } else if (pantallaActual === 13 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 1;  // Arreglo: volver a la pantalla principal
  } else if (pantallaActual === 14 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 15;
  } else if (pantallaActual === 15 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 16;
  } else if (pantallaActual === 16 && mouseDentroDeBoton(width / 2 - 100, height - 100, 200, 50)) {
    pantallaActual = 1;  // Arreglo: volver a la pantalla principal
  }
}


function boton(texto, x, y, proximaPantalla) {
  fill(100);
  rect(x - 100, y - 30, 200, 50);
  fill(255);
  textSize(16);
  text(texto, x, y);
}

function dosBotones(texto1, texto2, x, y, pantalla1, pantalla2) {
  fill(100);
  rect(x - 120, y - 30, 100, 50);
  rect(x + 20, y - 30, 100, 50);
  fill(255);
  textSize(16);
  text(texto1, x - 70, y);
  text(texto2, x + 70, y);
}

function mouseDentroDeBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
