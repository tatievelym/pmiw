class Boton {
  constructor(texto, x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.ver = true;
  }

  mostrar() {
    this.ver = true
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto, 10);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  ocultar() {
    this.ver = false;
  }

  presionado() {
    if (
      this.ver &&
      mouseX >= this.x &&
      mouseX <= this.x + this.ancho &&
      mouseY >= this.y &&
      mouseY <= this.y + this.alto &&
      mouseIsPressed
      ) {
        sonido.play();
      return true;
    }
    return false;
  }
}
