function pantalla() {

  if (estado == 'inicio') {                            //inicio pantalla de inicio con los creditos
    image(pantallas[p], 0, 0, fondoX, fondoY);
    botones();
  } else if (estado == 'creditos') {
    image(pantallas[0], 0, 0, fondoX, fondoY);
    push();
    textFont(fuente);
    textSize(32);
    botones();
    for (let i = 0; i < boton.length; i++) {
      let x = boton[i][0];
      let y = boton[i][1];
      let w = boton[i][2];
      let h = boton[i][3];
      let texto = boton[i][4];

      if (i==0) {
        text('Tatiana\nMontenegro', x-50, y);
      }
      if (i==1) {
        text('Tobias\nSokol', x, y);
      }
    }                            //final pantalla de inicio con los creditos
    pop();
  } else if (estado == 'juego') {
    image(pantallas[p], 0, 0, fondoX, fondoY);

    // Si pasaron más de 4 segundos
    if (millis() - tiempoInicio > duracionPantalla) {
      if (puntosDeDecision.includes(p + 1)) {
        p++;
        estado = 'decision';
      } else {
        p++;
      }
      tiempoInicio = millis(); // Reinicia el contador de tiempo
    }
  } else if (estado == 'decision') {
    image(pantallas[p], 0, 0, fondoX, fondoY);
    botones();
  }

  if (estado == 'reiniciar') {
    image(pantallas[0], 0, 0, fondoX, fondoY);
    botones();
  }
  if (p == 10 && estado =='decision') {
    if (millis() - tiempoInicio > duracionDecision) {
      p++;
      estado = 'juego';
      tiempoInicio = millis();
    }
  }
  if (p == 3 && estado =='juego') {                          //finales
    if (millis() - tiempoInicio > duracionDecision) {
      estado = 'reiniciar';
      tiempoInicio = millis();
    }
  }
  if (p == 18 || p == 19 && estado =='juego') {
    if (millis() - tiempoInicio > duracionDecision) {
      estado = 'reiniciar';
      tiempoInicio = millis();
    }
  }
  if (p == 12 && estado == 'juego') {
    if (millis() - tiempoInicio > duracionPantalla1) {
      cambiarEstado('finalB');
    }
  }
  if (p == 14 && estado == 'juego') {
    if (millis() - tiempoInicio > duracionPantalla1) {
      cambiarEstado('finalBR');
    }
  }
}

function obtenerTextoPorPantalla(indice) {
  const mapaDeLineas = {
  1:
  1,
  2:
  2,
  3:
  3,
  4:
  4,
  5:
  5,
  6:
  8,
  7:
  9,
  8:
  10,
  9:
  11,
  10:
  12,
  12:
  6,
  13:
  7,
  15:
  13,
  16:
  14,
  17:
  15,
  18:
  16
};

let lineaDeseada = mapaDeLineas[indice];

if (lineaDeseada !== undefined) {
  let indiceDeTexto = lineaDeseada - 1;
  if (indiceDeTexto >= 0 && indiceDeTexto < txt.length) {
    return txt[indiceDeTexto];
  }
}

return "";
}

function mostrarTextoJuego() {
  if (estado === 'juego' || estado === 'decision') {
    let textoAMostrar = obtenerTextoPorPantalla(p);
    if (textoAMostrar.length > 0) {
      push();
      textFont(fuente);
      textSize(18);
      fill(255);
      noStroke();
      textAlign(LEFT, TOP);
      // la posicion de la caja de texto
      let xCaja = 15;
      let yCaja = 15;
      let wCaja = width * 0.75;
      let hCaja = 140;
      // Fondo transparentito je
      fill(0, 0, 0, 180);
      rect(xCaja, yCaja, wCaja, hCaja, 10);
      // Texto
      fill(255);
      text(textoAMostrar, xCaja + 10, yCaja + 10, wCaja - 20, hCaja - 20);
      pop();
    }
  }
}
