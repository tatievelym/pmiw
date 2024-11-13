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
  
  // Dibujar la imagen según la pantalla actual
  if (pantallaActual > 1 && pantallaActual <= 15) {
    image(imagenes[pantallaActual - 1], 0, 0, width, height);
  }

  // Textos y botones según la pantalla actual
  if (pantallaActual === 1) {
    mostrarTexto("FATAL FRAME", width / 2, height / 4, 32);
    mostrarTexto("Este es un juego creado por Koei Tecmo,\nuna compañía creada en 2009 a partir de la fusión\nde las compañías desarrolladoras de videojuegos y distribuidoras\njaponesas Tecmo y Koei.", width / 2, height / 3, 16);
    mostrarTexto("Alumna: Montenegro Tatiana", width - 10, height - 10, 12, RIGHT);
    boton("Comenzar", width / 2 - 80, height - 60, 3);
    boton("Créditos", width / 2 + 80, height - 60, 2);
  } else if (pantallaActual === 2) {
    mostrarTexto("Hola", width / 2, height / 2, 32);
    boton("Volver", 20, height - 40, 1);
  } else if (pantallaActual === 3) {
    boton("Siguiente", width - 100, height - 40, 4);
  } else if (pantallaActual === 4) {
    boton("Listo?", width - 100, height - 40, 5);
  } else if (pantallaActual === 5) {
    botonDoble("Sí", "No", width / 2 - 100, height - 40, 9, 6);
  } else if (pantallaActual === 6) {
    boton("Siguiente", width - 100, height - 40, 7);
  } else if (pantallaActual === 7) {
    boton("Sacar cámara", width - 100, height - 40, 8);
  } else if (pantallaActual === 8) {
    boton("Tomar foto", width - 100, height - 40, 9);
  } else if (pantallaActual === 9) {
    boton("Volver", width / 2, height - 40, 1);
  } else if (pantallaActual === 10) {
    botonDoble("Sí", "No", width / 2 - 100, height - 40, 15, 11);
  } else if (pantallaActual === 11) {
    boton("Sacar cámara", width - 100, height - 40, 12);
  } else if (pantallaActual === 12) {
    boton("Siguiente", width - 100, height - 40, 13);
  } else if (pantallaActual === 13) {
    boton("Siguiente", width - 100, height - 40, 14);
  } else if (pantallaActual === 14) {
    boton("Volver", width / 2, height - 40, 1);
  } else if (pantallaActual === 15) {
    boton("Siguiente", width - 100, height - 40, 16);
  } else if (pantallaActual === 16) {
    boton("Siguiente", width - 100, height - 40, 17);
  } else if (pantallaActual === 17) {
    boton("Volver", width / 2, height - 40, 1);
  }
}

function mostrarTexto(texto, x, y, tamano, alineacion = CENTER) {
  fill(255);
  textSize(tamano);
  textAlign(alineacion);
  text(texto, x, y);
}

function boton(texto, x, y, pantallaDestino) {
  fill(100);
  rect(x - 50, y - 20, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x, y);
  if (mouseIsPressed && mouseDentroDeBoton(x - 50, y - 20, 100, 40)) {
    pantallaActual = pantallaDestino;
  }
}

function botonDoble(texto1, texto2, x, y, pantallaDestino1, pantallaDestino2) {
  fill(100);
  rect(x - 100, y - 20, 80, 40);
  rect(x + 20, y - 20, 80, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto1, x - 60, y);
  text(texto2, x + 60, y);
  if (mouseIsPressed) {
    if (mouseDentroDeBoton(x - 100, y - 20, 80, 40)) {
      pantallaActual = pantallaDestino1;
    } else if (mouseDentroDeBoton(x + 20, y - 20, 80, 40)) {
      pantallaActual = pantallaDestino2;
    }
  }
}

function mouseDentroDeBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
