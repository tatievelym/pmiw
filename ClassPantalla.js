class Pantalla {
  constructor() {
    this.botonComenzar = new Boton("COMENZAR", width / 2 - 50, height - 130, 100, 40);
    this.botonCreditos = new Boton("CREDITOS", width / 2 - 50, height - 90, 100, 40);
    this.botonVolver = new Boton("VOLVER", width / 2 - 50, height - 50, 100, 40);
  }
  mostrarPantallaInicial() {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("FATAL FRAME", width / 2, height / 2 - 100);
    textSize(16);
    text("INSTRUCCIONES: \nDerriba a todos los fantasmas antes de que lleguen a ti.\n Usa las flechas para moverte y la barra espaciadora para capturarlos.", width / 2, height / 2);

    this.botonComenzar.mostrar();
    this.botonCreditos.mostrar();
    this.botonVolver.ocultar();
  }
  mostrarPantallaCreditos() {
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Juego creado por Tatiana Montenegro.", width / 2, height / 2);

    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonVolver.mostrar();
  }


  mostrarPantallas() {
    if (this.botonComenzar.presionado()) {
      pantalla = 2;
      juego = new Juego();
      console.log("presionado", pantalla);
    } else if (this.botonCreditos.presionado()) {
      pantalla = 3;
      console.log("presionado", pantalla);
    } else if (this.botonVolver.presionado()) {
      pantalla = 1;
      console.log("presionado", pantalla);
    }
    if (pantalla === 1) {
      image(imagenes["inicio"], 0, 0, width, height);
      this.mostrarPantallaInicial();
    }
    if (pantalla === 2) {
      image(imagenes["juego"], 0, 0, width, height);
      juego.actualizarJuego();
    }
    if (pantalla === 3) {
      image(imagenes["creditos"], 0, 0, width, height);
      this.mostrarPantallaCreditos();
    }
  }

  mostrarResultado() {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(gano ? "¡Ganaste!" : "¡Perdiste!", width / 2, height / 2);
    textSize(20);
    text("Presiona el botón 'Reiniciar'", width / 2, height / 2 + 40);
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonVolver.mostrar();
    if (this.botonVolver.presionado()) {
      pantalla = 1;
      console.log("presionado", pantalla);
    }
  }
  ocultarBotones() {
    this.botonComenzar.ocultar();
    this.botonCreditos.ocultar();
    this.botonVolver.ocultar();
  }
}
