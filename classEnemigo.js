/*
class Enemigo {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.ancho = 20;
    this.alto = 20;
    this.velocidad = velocidad;
  }

  mover() {
    this.x += this.velocidad;
    if (this.x > width - this.ancho || this.x < 0) {
      this.velocidad *= -1;
      this.y += 20;
    }
  }

  mostrar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  haLlegadoAbajo() {
    return this.y > height - 40;
  }
}
/*
