class personaje {

  constructor() {
    this.x = 640/2;
    this.y = 420;
    this.t = 100;  //tamano
    this.vx = 30; //velocidad x
    this.vy = 50; //velocidad y
    this.radio = this.t / 2; //  detectar colisión
  }
  dibujar() {
    push();
    imageMode(CENTER);
    // DEBUG: Círculo de Colisión del Personaje
    // Dibuja un círculo transparente para visualizar el área de colisión (radio)
    /*ellipseMode(CENTER);
     noFill();
     stroke(255, 0, 0); // Borde rojo
     strokeWeight(2);
     ellipse(this.x, this.y, this.radio * 2);*/

    image( pantalla.imagenes[4], this.x, this.y, this.t, this.t );
    pop();
  }

  mover() {
    if (keyCode === LEFT_ARROW ) {
      this.x = max(this.x - this.vx, this.radio);
    }
    if (keyCode === RIGHT_ARROW ) {
      this.x = min(this.x + this.vx, width - this.radio);
    }
    if (keyCode === UP_ARROW ) {
      this.y = max(this.y - this.vy, this.radio);
    }
    if (keyCode === DOWN_ARROW ) {
      this.y = min(this.y + this.vy, height - this.radio);
    }
  }
  reiniciar() {
    this.x = 640/2;
    this.y = 420;
  }
}
