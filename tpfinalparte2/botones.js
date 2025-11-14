class Boton {
  constructor(x, y, w, h, texto, destino) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.destino = destino; // pantalla destino
  }

  dibujar(corner) {
    // hover
    if (mouseX > this.x && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.h) {

      fill(255, 200, 0);
      noStroke();
    } else {
      fill(255);
      stroke(0);
      strokeWeight(1);
    }

    rect(this.x, this.y, this.w, this.h, corner);

    // texto
    fill(mouseX > this.x && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.h ? 255 : 0);

    text(this.texto, this.x + 5, this.y);
  }

  clic() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
      );
  }
}

function crearBotones() {
  botones = [
    // x, y, w, h, texto, destino
    new Boton(50, 350, 200, 60, "INICIAR", "juego"), // índice 0
    new Boton(300, 350, 200, 60, "CONTROLES", "controles"), // índice 1
    new Boton(50, 350, 200, 60, "VOLVER", "inicio")      // índice 2
  ];
}

function botonesPantalla() {
  let corner = 16;
  push();
  textFont(fuente);
  textSize(32);
  textAlign(LEFT, TOP);

  if (pantalla.p === 'inicio') {
    botones[0].dibujar(corner);
    botones[1].dibujar(corner);
  } else if (pantalla.p === 'controles') {
    botones[2].dibujar(corner);
  } else if (pantalla.p === 'juego') {
  }

  pop();
}
function mouseReleased() {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].clic()) {
      // if (sonidoClic) sonidoClic.play();
      pantalla.p = botones[i].destino;
      console.log("cambiaste a pantalla:", pantalla.p);
      // si presionaste INICIAR
      if (botones[i].destino === "juego") {
        tiempoInicio = millis();
      }
    }
  }
}
