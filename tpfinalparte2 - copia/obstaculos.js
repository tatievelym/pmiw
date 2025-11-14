class Obst {
  constructor() {
    this.t = random(30, 70); // tamaño
    this.radio = this.t * 0.4;
    this.x = random(this.radio, width - this.radio);
    this.y = -this.t;
    this.v = random(5, 10); // velocidad
    // Elegir aleatoriamente entre dos imágenes de escombros (índices 2 y 3)
    this.imgIndex = floor(random(2, 4));
  }

  dibujar() {
    image(pantalla.imagenes[this.imgIndex], this.x - this.t/2, this.y - this.t/2, this.t, this.t);
  }

  caer() {
    this.y += this.v;
  }

  fueraDePantalla() {
    return this.y > height + this.t / 2;
  }
}
