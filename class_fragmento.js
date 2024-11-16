class Fragmento {
  constructor(x, y) {
    this.x = x + random(-20, 20);
    this.y = y + random(-20, 20);
    this.velocidad = random(1, 3);
  }

  mover() {
    this.x += random(-this.velocidad, this.velocidad);
    this.y += this.velocidad;
  }

  mostrar() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 10, 10);
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
