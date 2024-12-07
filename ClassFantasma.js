class Fantasma {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 40;
    this.velocidad = velocidad;
    this.activo = true; // Estado del fantasma
  }

  mover() {
    if (this.activo) {
      this.x += this.velocidad;
      if (this.x > width - this.ancho || this.x < 0) {
        this.velocidad *= -1;
        this.y += 20;
      }
    }
  }

  mostrar() {
    if (this.activo) {
      image(imagenes["fantasma"], this.x, this.y, this.ancho, this.alto);
    }
  }

  haLlegadoAbajo() {
    return this.y > height - 40;
  }
}
