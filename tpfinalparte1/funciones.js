function mostrarTexto(texto, x, y, tamano, ancho) {
  fill(255);
  push();
  textSize(tamano);
  textAlign(CENTER);
  text(texto, x, y, ancho);
  pop();
}
function pantallaInicio() {

  if (pantallaActual === 1) {
    mostrarTexto(texto[0], width / 4, height / 4, 32, 320);
    mostrarTexto(texto[1], width / 4, height / 3, 16, 320);
    botonDoble("Créditos", "Comenzar", 2, 3);
    sonido.stop();
  }
}
function pantallasBoton() {
  if (pantallaActual === 2) {
    mostrarTexto(texto[2], width / 4, height / 4, 32, 320);
    botonCondicion("volver");
  } else if (pantallaActual === 8) {
    mostrarTexto(texto[7], 20, 10, 16, width-20);
    botonCondicion("Sacar cámara");
  } else if (pantallaActual === 9) {
    mostrarTexto(texto[8], 20, 10, 16, width-20);
    botonCondicion("Tomar foto");
  } else if (pantallaActual === 10) {
    mostrarTexto(texto[9], 20, 10, 16, width-20);
    mostrarTexto(texto[18], 20, height-40, 24, width-20);
    botonCondicion("volver");
  } else if (pantallaActual === 11) {
    mostrarTexto(texto[14], 20, 10, 16, width-20);
    botonCondicion("Sacar cámara");
  } else if (pantallaActual === 12) {
    mostrarTexto(texto[16], 20, 10, 16, width-20);
    botonCondicion("Tomar foto");
  } else if (pantallaActual === 14) {
    mostrarTexto(texto[12], 20, 10, 16, width-20);
    botonCondicion("volver");
  } else if (pantallaActual === 16) {
    mostrarTexto(texto[17], 20, height / 4, 32, width-20);
    botonCondicion("volver");
  }
}
function pantallasBotonSig() {
  if (pantallaActual === 3) {
    mostrarTexto(texto[3], 20, 10, 16, width-20);
    botonSiguiente()
  } else if ( pantallaActual === 4) {
    mostrarTexto(texto[4], 20, 10, 16, width-20);
    botonSiguiente()
  } else if ( pantallaActual === 7) {
    mostrarTexto(texto[6], 20, 10, 16, width-20);
    botonSiguiente()
  } else if ( pantallaActual === 13) {
    mostrarTexto(texto[13], 20, 10, 16, width-20);
    botonSiguiente()
  } else if ( pantallaActual === 15) {
    mostrarTexto(texto[15], 20, 10, 16, width-20);
    botonSiguiente()
  }
}

function pantallasDecision() {
  if (pantallaActual === 5) {
    mostrarTexto(texto[5], 20, 10, 16, width- 20);
    botonDoble("Si", "No");
  } else if (pantallaActual === 6) {
    mostrarTexto(texto[11], 20, 10, 16, width- 20);
    botonDoble("Si", "No");
  }
}
