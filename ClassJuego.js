class Juego {
  constructor() {
    this.pantalla = new Pantalla();
    this.camara =  new Camara(width / 2, height - 60);
    this.fantasmas = [];
    this.capturas = [];
    this.juegoTerminado = false;
    this.gano = false;
    this.filas = 3
      this.columnas = 8;
    this.iniciarJuego();
  }


  iniciarJuego() {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        this.fantasmas.push(new Fantasma(j * 60 + 30, i * 40 + 40, 1 + i * 0.5));
      }
    }
  }
  actualizarJuego() {
    pantallas.ocultarBotones()
      this.camara.mostrar();
    if (keyIsPressed) {
      this.camara.teclaApretada();
    }
    for (let i = 0; i < this.capturas.length; i++) {
      this.capturas[i].mostrar();
      this.capturas[i].mover();
      if (this.capturas[i].fueraDePantalla()) {
        this.capturas[i].activa = false; // Desactivar la bala cuando sale de la pantalla
      }

      for (let j = 0; j < this.fantasmas.length; j++) {
        if (this.capturas[i].colisionaCon(this.fantasmas[j]) && this.fantasmas[j].activo) {
          this.capturas[i].activa = false; // Desactivar la bala
          this.fantasmas[j].activo = false; // Desactivar el fantasma
        }
      }
    }                    

    for (let i = 0; i < this.fantasmas.length; i++) {
      this.fantasmas[i].mover();
      this.fantasmas[i].mostrar();

      if (this.fantasmas[i].haLlegadoAbajo()) {
        this.juegoTerminado = true;
        this.gano = false;
      }
    }

    if (this.fantasmas.filter(fantasma => fantasma.activo).length === 0) {
      this.juegoTerminado = true;
      this.gano = true;
    } else if (this.juegoTerminado) {
      this.pantalla.mostrarResultado();
    }
  }
}
