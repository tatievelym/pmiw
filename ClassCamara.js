class Camara {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 60;
    this.alto = 40;
  }

  mostrar() {
    image(imagenes["camara"], this.x, this.y, this.ancho, this.alto);
  }

  moverDer() {
    this.x = min(this.x + 2, width - this.ancho);
  }

  moverIzq() {
    this.x = max(this.x - 2, 0);
  }

  teclaApretada() {
    if (keyCode === LEFT_ARROW) {
      this.moverIzq();
    }
    if (keyCode === RIGHT_ARROW) {
      this.moverDer();
    }if (key === ' ') {
      this.capturar();
      console.log("espacio");
    }
  }
  capturar() {
    capturas.push(new Captura(this.x + this.ancho / 2, this.y));
  }
}
