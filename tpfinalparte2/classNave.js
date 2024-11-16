class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 20;
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  moverDer() {
    this.x = this.x +2;
  }

  moverIzq() {
    this.x = this.x -2;
  }
  teclaApretada() {
    if (pantalla === 2 && !juegoTerminado) {
      if (keyCode === LEFT_ARROW) this.moverIzq();
      if (keyCode === RIGHT_ARROW) this.moverDer();
    }
  }
    teclaDisparar() {
      if (key === ' ') this.disparar();
    }
  
  disparar() {
    balas.push(new Bala(this.x + this.ancho / 2, this.y));
  }
}
