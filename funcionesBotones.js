
function botonSiguiente() {
  fill(100);
  push();
  rectMode(CENTER);
  rect(width - 100, height - 40, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Siguiente", width - 100, height - 40);
  pop();
}


function botonCondicion(texto) {
  fill(100);
  push();
  rectMode(CENTER);
  rect(width - 100, height - 40, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, width - 100, height - 40);
  pop();
}


function botonDoble(texto1, texto2, pantallaDestino1, pantallaDestino2) {
  fill(100);
  push();
  rectMode(CENTER);
  rect(width / 2 - 80, height - 60, 80, 40);
  rect(width / 2 + 80, height - 60, 80, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto1, width / 2 - 80, height - 60);
  text(texto2, width / 2 + 80, height - 60);
  pop();
}


function mouseReleased() {
  //boton siguiente
  if (pantallaActual==3 ||pantallaActual==4 ||pantallaActual==7 ||pantallaActual==13 ||pantallaActual==15) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = pantallaActual+1
        print (pantallaActual);
    }
  }
  //boton condicion
  else if (pantallaActual==2 || pantallaActual == 16 || pantallaActual== 14 || pantallaActual== 10) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = 1;
      print (pantallaActual);
    }
  } else if (pantallaActual==8) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = pantallaActual+1;
      print (pantallaActual);
    }
  } else if (pantallaActual==9) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = 10;
      print (pantallaActual);
    }
  } else if (pantallaActual==11) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = pantallaActual+1;
      print (pantallaActual);
    }
  } else if (pantallaActual==12) {
    if (mouseDentroDeBoton(width - 150, height - 60, 100, 40)) {
      pantallaActual = pantallaActual+1;
      print (pantallaActual);
    }
  }
  //botonDoble
  else if (pantallaActual==1) {
    if (mouseDentroDeBoton(width / 2 - 120, height - 80, 80, 40)) {
      pantallaActual = 2;
      print("destino1", pantallaActual);
    } else if (mouseDentroDeBoton(width / 2 + 40, height - 80, 80, 40)) {
      pantallaActual = 3;
      sonido.play();
      print("destino2", pantallaActual);
    }
  } else if (pantallaActual==5) {
    if (mouseDentroDeBoton(width / 2 - 120, height - 80, 80, 40)) {
      pantallaActual = 6;
      print("destino1", pantallaActual);
    } else if (mouseDentroDeBoton(width / 2 + 40, height - 80, 80, 40)) {
      pantallaActual = 7;
      print("destino2", pantallaActual);
    }
  } else if (pantallaActual==6) {
    if (mouseDentroDeBoton(width / 2 - 120, height - 80, 80, 40)) {
      pantallaActual = 15;
      print("destino1", pantallaActual);
    } else if (mouseDentroDeBoton(width / 2 + 40, height - 80, 80, 40)) {
      pantallaActual = 11;
      print("destino2", pantallaActual);
    }
  }
}
function mouseDentroDeBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
