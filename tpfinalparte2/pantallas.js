class pantallas {
  constructor() {
    this.imagenes = [];
    this.videoGanaste;
    this.sonidoCueva;
    this.p = 'inicio';
    this.txt,
      this.fuente;
  }

  cargar() {
    this.txt = loadStrings ('texto.txt');
    this.fuente = loadFont('PORKYS.TTF');
    this.imagenes[0] = loadImage('data/inicio.jpg');
    this.imagenes[1] = loadImage('data/fondoPucca.png');
    this.imagenes[2] = loadImage('data/escombro.png');
    this.imagenes[3] = loadImage('data/escombro1.png');
    this.imagenes[4] = loadImage('data/garu.png');
    this.imagenes[5] = loadImage('data/teclado.webp');
    this.imagenes[6] = loadImage('data/fondo.jpg');
    this.sonidoCueva = loadSound('sonido/cueva.mp3');
    this.videoGanaste = createVideo('videos/finalB.mp4')
      this.videoGanaste.hide();
    this.videoGanaste.onended(() => {
      image(this.imagenes[1], 0, 0, width, height);
      this.videoGanaste.hide();
    }
    );
  }

  dibujar() {
    //pantalla Inicio
    if (this.p === 'inicio') {
      image(this.imagenes[0], 0, 0, width, height);
      textAlign(CENTER);
      textSize(24);
      textFont(this.fuente);
      text(this.txt[0], 10, 50, width-10, height-200);
      text(this.txt[1], 10, 150, width-10, height-200);
      console.log('pantalla '+this.p )
    }
    //pantalla controles
    else if (this.p === 'controles') {
      image(this.imagenes[1], 0, 0, width, height);
      textAlign(CENTER);
      textSize(24);
      textFont(this.fuente);
      text(this.txt[2], 10, 150, width-10, height-200);
      image(this.imagenes[5], width/2-75, height/2-75, 150, 150);
      text(this.txt[4], 10, 320, width-20, 200);
    }

    //pantalla Juego
    else if (this.p === 'juego') {
      //      image(this.imagenes[6], 0, 0, width, height);
      //      jugador.dibujar();
      console.log('pantalla '+this.p )
    }
    //pantalla perdiste
    else if (this.p === 'perdiste') {
      pantalla.sonidoCueva.stop();
      image(this.imagenes[1], 0, 0, width, height);
      textAlign(CENTER);
      textSize(24);
      textFont(this.fuente);
      text(this.txt[3], 10, 250, width - 20, height - 200);
      console.log('pantalla ' + this.p);
    }
    //pantalla ganaste
    else if (this.p === 'ganaste') {

      image(this.videoGanaste, 0, 0, width, height);
      if (this.videoGanaste.time() === 0) {
        this.videoGanaste.play();
      }
      console.log('pantalla '+this.p )
    }
  }
}
