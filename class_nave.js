class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 20;
    this.velocidad = 5;
  }

  mover(direccion) {
    this.x += direccion * this.velocidad;
    this.x = constrain(this.x, 0, width - this.ancho);
  }

  disparar() {
    balas.push(new Bala(this.x + this.ancho / 2, this.y));
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
