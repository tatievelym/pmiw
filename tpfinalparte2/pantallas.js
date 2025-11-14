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

  mostrarInicio() {
    image(this.imagenes[0], 0, 0, width, height);
  }
}
