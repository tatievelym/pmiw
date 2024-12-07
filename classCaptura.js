class Captura {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 7;
    this.ancho = 5;
    this.alto = 10;
    this.activa = true; // Estado de la bala
  }

  mover() {
    if (this.activa) {
      this.y -= this.velocidad; // Las balas se mueven hacia arriba
    }
  }

  mostrar() {
    if (this.activa) {
      fill(255, 0, 0);
      rect(this.x, this.y, this.ancho, this.alto); // Mostrar las balas
    }
  }

  fueraDePantalla() {
    return this.y < 0; // Las balas salen de la pantalla cuando llegan al límite superior
  }

  colisionaCon(fantasma) {
    // Colisión entre la bala y el fantasma
    return this.x > fantasma.x && this.x < fantasma.x + fantasma.ancho &&
           this.y > fantasma.y && this.y < fantasma.y + fantasma.alto;
  }
}
