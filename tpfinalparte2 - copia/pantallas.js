class pantallas {
  constructor() {
    this.imagenes = [];
    this.p = 'inicio';
    this.txt;
    this.fuente;
  }

  cargar() {
    this.txt = loadStrings('texto.txt');
    this.fuente = loadFont('PORKYS.TTF');
    // Asegúrate de que las rutas y los índices sean correctos
    this.imagenes[0] = loadImage('data/inicio.jpg');
    this.imagenes[1] = loadImage('data/fondoPucca.png');
    this.imagenes[2] = loadImage('data/escombro.png'); // obstáculo 1
    this.imagenes[3] = loadImage('data/escombro1.png'); // obstáculo 2
    this.imagenes[4] = loadImage('data/garu.png'); // personaje
    this.imagenes[5] = loadImage('data/teclado.webp');
  }

  dibujar() {
    background(0);

    push();
    textFont(this.fuente);
    textAlign(CENTER);
    textSize(24);

    if (this.p === 'inicio') {
      image(this.imagenes[0], 0, 0, width, height);
      text(this.txt[0], 10, 50, width - 20, height - 200);
      text(this.txt[1], 10, 150, width - 20, height - 200);
    } else if (this.p === 'controles') {
      image(this.imagenes[1], 0, 0, width, height);
      textSize(32);
      text("Instrucciones y Créditos", width/2, 50);
      textSize(20);
      text(this.txt[2], 10, 100, width - 20, height - 200); // Texto de instrucciones/créditos
      image(this.imagenes[5], width / 2 - 75, height / 2, 150, 150);
    } else if (this.p === 'juego') {
      image(this.imagenes[1], 0, 0, width, height);
    } else if (this.p === 'pierde') { // Pantalla Derrota
      image(this.imagenes[1], 0, 0, width, height);
      textSize(48);
      fill(255, 0, 0);
      text("¡HAS PERDIDO!", width / 2, height / 2 - 50);
      textSize(24);
      text("Puntuación final: " + juego.puntuacion, width / 2, height / 2);
      text("Un escombro te golpeó. Intenta de nuevo.", width / 2, height / 2 + 50);
    } else if (this.p === 'gana') { // Pantalla Victoria
      image(this.imagenes[1], 0, 0, width, height);
      textSize(48);
      fill(0, 255, 0);
      text("¡HAS GANADO!", width / 2, height / 2 - 50);
      textSize(24);
      text("Puntuación final: " + juego.puntuacion, width / 2, height / 2);
      text("¡Misión cumplida! Garu está a salvo.", width / 2, height / 2 + 50);
    }
    pop();
  }
}
