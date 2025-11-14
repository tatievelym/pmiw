class personaje {
  constructor() {
    this.x = width / 2;
    this.y = 420;
    this.t = 50; // tamano
    this.v = 10; // velocidad
    this.c = color(255); // Color inicial
    this.radio = this.t / 2;
  }

  dibujar() {
    // Puedes dibujar la imagen o un color de fondo para debug/referencia
    fill(this.c);
    rectMode(CENTER);
    // Usa la imagen de Garu (índice 4) si está disponible
    image(pantalla.imagenes[4], this.x - this.radio, this.y - this.radio, this.t, this.t);
  }

  mover() {
    // Solo mueve horizontalmente para esquivar los objetos que caen
    if (keyCode === LEFT_ARROW) {
      this.x = max(this.x - this.v, this.radio);
    }
    if (keyCode === RIGHT_ARROW) {
      this.x = min(this.x + this.v, width - this.radio);
    }
  }

  reiniciar() {
    this.x = width / 2;
    this.y = 420;
    this.c = color(255);
  }

  colorColision() {
    this.c = color(255, 0, 0); // Rojo al perder
  }
}
