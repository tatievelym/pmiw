class Boton {
  constructor(x, y, w, h, destino) {
    this.botones = [];
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.destino = destino; // pantalla destino
  }

  dibujar(texto) {
    // hover
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      fill(228, 0, 2);
      noStroke();
    } else {
      fill(255);
      stroke(0);
      strokeWeight(1);
    }
    rect(this.x, this.y, this.w, this.h, 16);

    // texto
    fill(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h ? 255 : 0);
    text(texto, this.x + 15, this.y+10);
  }

  clic() {
    return (
      mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h);
  }

  crearBotones() {
    this.botones = [
      // x, y, w, h, texto, destino
      new Boton(50, 350, 140, 60, "juego"), // índice 0: Iniciar
      new Boton(width-250, 350, 200, 60, "controles"), // índice 1: controles
      new Boton(width/2-60, 350, 120, 60, "inicio"), // índice 2: inicio
      new Boton(width/2 - 90, 350, 170, 60, "inicio") // índice 3: reiniciar
    ];
  }

  botonesPantalla() {
    push();
    textFont(pantalla.fuente);
    textSize(32);
    textAlign(LEFT, TOP);

    if (pantalla.p === 'inicio') {
      this.botones[0].dibujar("INICIAR");
      this.botones[1].dibujar("CONTROLES");
    } else if (pantalla.p === 'controles') {
      this.botones[2].dibujar("INICIO");
    } else if (pantalla.p === 'ganaste') {
      this.botones[3].dibujar("REINICIAR");
    } else if (pantalla.p === 'perdiste') {
      this.botones[3].dibujar("REINICIAR");
    }

    pop();
  }

  cambioPantalla() {
    //INICIO
    if (pantalla.p === 'inicio') {
      if (this.botones[0].clic()) {
        pantalla.p = this.botones[0].destino; //juego
        pantalla.sonidoCueva.play();
        juego.iniciar();
        console.log("cambiaste a pantalla:", pantalla.p);
        return;
      }
      // CONTROLES
      if (this.botones[1].clic()) {
        pantalla.p = this.botones[1].destino; //controles
        console.log("cambiaste a pantalla:", pantalla.p);
        return;
      }
    } else if (pantalla.p === 'controles') {
      // INICIO
      if (this.botones[2].clic()) {
        pantalla.p = this.botones[2].destino; //inicio
        console.log("cambiaste a pantalla:", pantalla.p);
        return;
      }
    } else if (pantalla.p === 'ganaste') {
      if (this.botones[3].clic()) {
        pantalla.p = "inicio";
        pantalla.videoGanaste.stop();
        pantalla.videoGanaste.time(0);
        return;
      }
    } else if (pantalla.p === 'perdiste') {
      if (this.botones[3].clic()) {
        pantalla.p = "inicio";
        return;
      }
    }
  }
}
