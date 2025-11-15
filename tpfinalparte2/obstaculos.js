class Obst {
  constructor() {
    this.t = random(70, 150);  // tamaño
    this.radio = this.t / 2; //  detectar colisión
    this.x = random(this.t / 2, width - this.t / 2);
    this.y = -this.t;
    this.v = random(1, 3);  // velocidad
    this.imgObst = floor(random(2, 4));
  }

  dibujar() {
    push();
    //ellipseMode(CENTER);
    imageMode(CENTER);
    // === DEBUG: Círculo de Colisión del Personaje ===
    // Dibuja un círculo transparente para visualizar el área de colisión (radio)
    /*  noFill();
     stroke(255, 0, 0); // Borde rojo
     strokeWeight(2);
     ellipse(this.x, this.y, this.radio * 2);
     */
    image(pantalla.imagenes[this.imgObst], this.x, this.y, this.t, this.t);
    pop();
  }

  caer() {
    this.y += this.v;
  }

  fueraDePantalla() {
    return this.y > height + this.t / 2;
  }
}
