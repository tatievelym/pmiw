class personaje {

  constructor() {
    this.x = 0;
    this.y = 240;
    this.t = 50;  //tamano
    this.v = 10;  //velocidad
    this.c = 255;
  }
  dibujar() {
    fill( this.c, 0, 0 );
    rect( this.x, this.y, this.t, this.t);
  }

  mover() {
    if (keyCode === LEFT_ARROW ) {
      // Code to run if the enter key was pressed.
      this.x -= this.v;
    }
    if (keyCode === RIGHT_ARROW ) {
      // Code to run if the enter key was pressed.
      this.x += this.v;
    }
  }
}
