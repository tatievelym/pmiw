let imagenes = []; 
let pantallaActual = 1;

function preload() {
  for (let i = 1; i <= 15; i++) {
    imagenes[i] = loadImage('Descargas/imagen' + i + '.png'); // Ruta simple a la carpeta de Descargas
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);

  if (pantallaActual === 1) {
    mostrarPantallaNegra();
  } else if (pantallaActual === 2) {
    mostrarPantallaConImagen(1, "siguiente");
  } else if (pantallaActual === 3) {
    mostrarPantallaConImagen(2, "listo?");
  } else if (pantallaActual === 4) {
    mostrarPantallaConDosBotones(3, "si", "no", 9, 5);
  } else if (pantallaActual === 5) {
    mostrarPantallaConImagen(4, "siguiente");
  } else if (pantallaActual === 6) {
    mostrarPantallaConImagen(5, "sacar cámara");
  } else if (pantallaActual === 7) {
    mostrarPantallaConImagen(6, "tomar foto");
  } else if (pantallaActual === 8) {
    mostrarPantallaConImagen(7, "volver");
  } else if (pantallaActual === 9) {
    mostrarPantallaConDosBotones(8, "si", "no", 14, 10);
  } else if (pantallaActual === 10) {
    mostrarPantallaConImagen(9, "sacar cámara");
  } else if (pantallaActual === 11) {
    mostrarPantallaConImagen(10, "siguiente");
  } else if (pantallaActual === 12) {
    mostrarPantallaConImagen(11, "siguiente");
  } else if (pantallaActual === 13) {
    mostrarPantallaConImagen(12, "volver");
  } else if (pantallaActual === 14) {
    mostrarPantallaConImagen(13, "siguiente");
  } else if (pantallaActual === 15) {
    mostrarPantallaConImagen(14, "siguiente");
  } else if (pantallaActual === 16) {
    mostrarPantallaConImagen(15, "volver");
  }
}

function mostrarPantallaNegra() {
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("Comenzar", width / 2, height - 50);
  if (mouseIsPressed && mouseY > height - 100) {
    pantallaActual = 2;
  }
}

function mostrarPantallaConImagen(indice, textoBoton) {
  image(imagenes[indice], 0, 0, width, height);
  fill(255);
  rect(width - 120, height - 80, 100, 50);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoBoton, width - 70, height - 55);

  if (mouseIsPressed && mouseX > width - 120 && mouseX < width - 20 && mouseY > height - 80 && mouseY < height - 30) {
    pantallaActual++;
  }
}

function mostrarPantallaConDosBotones(indice, textoBoton1, textoBoton2, siguienteSi, siguienteNo) {
  image(imagenes[indice], 0, 0, width, height);

  let anchoBoton = 100;
  let y = height - 100;
  let x1 = width / 2 - anchoBoton - 20;
  let x2 = width / 2 + 20;

  fill(255);
  rect(x1, y, anchoBoton, 50);
  rect(x2, y, anchoBoton, 50);

  fill(0);
  textAlign(CENTER, CENTER);
  text(textoBoton1, x1 + anchoBoton / 2, y + 25);
  text(textoBoton2, x2 + anchoBoton / 2, y + 25);

  if (mouseIsPressed && mouseY > y && mouseY < y + 50) {
    if (mouseX > x1 && mouseX < x1 + anchoBoton) {
      pantallaActual = siguienteNo;
    } else if (mouseX > x2 && mouseX < x2 + anchoBoton) {
      pantallaActual = siguienteSi;
    }
  }
}
