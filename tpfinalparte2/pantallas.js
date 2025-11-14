class pantallas {
  constructor() {
    this.imagenes = [];
  }

  cargar() {
    this.imagenes[0] = loadImage('data/inicio.jpg');
    this.imagenes[1] = loadImage('data/fondoPucca.png');
    this.imagenes[2] = loadImage('data/escombro.png');
    this.imagenes[2] = loadImage('data/escombro1.png');
    this.imagenes[2] = loadImage('data/garu.png');
    this.imagenes[2] = loadImage('data/teclado.webp');
  }

  mostrar() {
    let p = 'inicio';
    if (p = 'inicio') {
      image(this.imagenes[0], 0, 0, width, height);
      console.log('pantalla '+p )
    }
    else if (p = 'controles'){
    image(this.imagenes[1], 0, 0, width, height);
    }
  }
}
