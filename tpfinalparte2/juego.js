class Juego {
  constructor() {
    this.obstaculos = [];
    this.tasaSpawn = 70;  // frecuencia de spawn
    this.perdiste = false;
    this.ganaste = false;
    this.scrollY = 0;
    if (pantalla.imagenes[6] && pantalla.imagenes[6].height) {
      this.fondoAltoTotal = pantalla.imagenes[6].height;
    }
    this.limiteScroll = this.fondoAltoTotal - height;
    this.puntoActivacion = height/2;
  }

  iniciar() {
    this.obstaculos = [];
    this.perdiste = false;
    this.ganaste = false;
    this.scrollY = this.limiteScroll;
    jugador.reiniciar();
  }

  actualizar() {
    // Generar obst
    if (frameCount % this.tasaSpawn === 0) {
      this.obstaculos.push(new Obst());
    }
    for (let i = this.obstaculos.length - 1; i >= 0; i--) {
      let obst = this.obstaculos[i];
      obst.caer();
      obst.dibujar();

      if (this.detectarColision(obst)) {
        pantalla.p = 'perdiste';
        this.perdiste = true;
        console.log("COLISIÓN");
      }
      if (obst.fueraDePantalla()) {
        this.obstaculos.splice(i, 1);
      }
    }
    if (this.perdiste || this.ganaste) return;

    //scroll
    if (jugador.y < this.puntoActivacion && this.scrollY > 0) {
      let desplazamiento = this.puntoActivacion - jugador.y;
      this.scrollY = max(this.scrollY - desplazamiento, 0);
      jugador.y = this.puntoActivacion;
    }
    // ganaste
    if (this.scrollY <= 0 && jugador.y <= jugador.radio) {
      this.ganaste = true;
      pantalla.p = 'ganaste';
      return;
    }
  }

  dibujarFondo() {
    image(pantalla.imagenes[6], 0, -this.scrollY, width, this.fondoAltoTotal);
  }

  detectarColision(obst) {
    // calcula la distancia entre el personaje y el obstáculo
    let distancia = dist(jugador.x, jugador.y, obst.x, obst.y);
    let sumaRadios = jugador.radio + obst.radio;
    return distancia < sumaRadios;
  }
}
