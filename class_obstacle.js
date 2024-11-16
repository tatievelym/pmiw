class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 50;
    this.alto = 50;
    this.impactado = false;
    this.fragmentos = [];
  }

  dividir() {
    if (this.impactado) {
      for (let i = 0; i < 4; i++) {
        fragmentos.push(new Fragmento(this.x, this.y));
      }
    }
  }

  mostrar() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  haColisionadoConBala(balas) {
    for (let i = 0; i < balas.length; i++) {
      if (balas[i].x > this.x && balas[i].x < this.x + this.ancho &&
          balas[i].y > this.y && balas[i].y < this.y + this.alto) {
        this.impactado = true;
        balas.splice(i, 1);
        this.dividir();
        return true;
      }
    }
    return false;
  }
}
