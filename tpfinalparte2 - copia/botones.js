class Boton {
  constructor(x, y, w, h, destino) {
    this.botones = [];
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.destino = destino;
  }

  dibujar(texto) {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      fill(255, 200, 0);
      noStroke();
    } else {
      fill(255);
      stroke(0);
      strokeWeight(1);
    }
    rect(this.x, this.y, this.w, this.h, 16);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(texto, this.x + this.w/2, this.y + this.h/2);
  }

  clic() {
    return (
      mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h);
  }

  crearBotones() {
    this.botones = [
      // índice 0: Iniciar (Inicio)
      new Boton(50, 350, 140, 60, "juego"),
      // índice 1: Controles (Inicio)
      new Boton(width - 250, 350, 200, 60, "controles"),
      // índice 2: Inicio (Controles, Gana, Pierde)
      new Boton(width / 2 - 60, 350, 120, 60, "inicio"),
      // índice 3: Reiniciar (Gana, Pierde)
      new Boton(width / 2 - 100, 400, 200, 60, "juego")
    ];
  }

  botonesPantalla() {
    push();
    textFont(pantalla.fuente);

    if (pantalla.p === 'inicio') {
      this.botones[0].dibujar("INICIAR");
      this.botones[1].dibujar("CONTROLES/CRÉDITOS");
    } else if (pantalla.p === 'controles') {
      this.botones[2].dibujar("INICIO");
    } else if (pantalla.p === 'pierde' || pantalla.p === 'gana') {
      // Botón de Reinicio
      this.botones[3].dibujar("REINICIAR JUEGO");
      // Botón de Inicio (ajustar posición)
      this.botones[2].x = width/2 - 100;
      this.botones[2].y = 300;
      this.botones[2].w = 200;
      this.botones[2].dibujar("VOLVER A INICIO");
    }
    pop();
  }

  cambioPantalla() {
    if (pantalla.p === 'inicio') {
      if (this.botones[0].clic()) { // INICIAR JUEGO
        pantalla.p = this.botones[0].destino;
        juego.iniciar(); // **Reinicia la lógica del juego**
        return;
      }
      if (this.botones[1].clic()) { // CONTROLES/CRÉDITOS
        pantalla.p = this.botones[1].destino;
        return;
      }
    } else if (pantalla.p === 'controles') {
      if (this.botones[2].clic()) { // VOLVER A INICIO
        pantalla.p = this.botones[2].destino;
        return;
      }
    } else if (pantalla.p === 'pierde' || pantalla.p === 'gana') {
      if (this.botones[3].clic()) { // REINICIAR JUEGO
        pantalla.p = this.botones[3].destino;
        juego.iniciar(); // **Reinicia la lógica del juego**
        return;
      }
      if (this.botones[2].clic()) { // VOLVER A INICIO (después de ganar/perder)
        pantalla.p = this.botones[2].destino;
        return;
      }
    }
  }
}
