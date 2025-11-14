class pantallas {
  constructor() {
    this.imagenes = [];
    this.p = 'inicio';
  }

  cargar() {
    this.imagenes[0] = loadImage('data/inicio.jpg');
    this.imagenes[1] = loadImage('data/fondoPucca.png');
    this.imagenes[2] = loadImage('data/escombro.png');
    this.imagenes[3] = loadImage('data/escombro1.png');
    this.imagenes[4] = loadImage('data/garu.png');
    this.imagenes[5] = loadImage('data/teclado.webp');
  }

  mostrar() {

    if (this.p === 'inicio') {
      image(this.imagenes[0], 0, 0, width, height);
      console.log('pantalla '+this.p )
    } else if (this.p === 'controles') {
      image(this.imagenes[1], 0, 0, width, height);
    } else if (this.p === 'juego') {
      image(this.imagenes[1], 0, 0, width, height);
      jugador.dibujar();
      console.log('pantalla '+this.p )
    }
  }
}
