let pantalla = 1;
let camara, fantasmas = [], capturas = [];
let juegoTerminado = false;
let gano = false;
let imagenes = [];
let botonComenzar, botonCreditos, botonVolver;
let sonido;

function preload() {
  imagenes["inicio"] = loadImage("data/inicio.jpg");
  imagenes["juego"] = loadImage("data/juego.jpg");
  imagenes["creditos"] = loadImage("data/creditos.jpg");
  imagenes["camara"] = loadImage("data/camara.jpg");
  imagenes["fantasma"] = loadImage("data/fantasma.jpg");
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  crearBotones();
  iniciarJuego();
}

function draw() {
  if (pantalla === 1) {
    image(imagenes["inicio"], 0, 0, width, height);
    mostrarPantallaInicial();
  } else if (pantalla === 2) {
    image(imagenes["juego"], 0, 0, width, height);
    actualizarJuego();
    if (keyIsPressed) {
      camara.teclaApretada();
    }
  } else if (pantalla === 3) {
    image(imagenes["creditos"], 0, 0, width, height);
    mostrarPantallaCreditos();
  }
}

class Captura {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 7;
    this.ancho = 5;
    this.alto = 10;
    this.activa = true; // Estado de la bala
  }

  mover() {
    if (this.activa) {
      this.y -= this.velocidad; // Las balas se mueven hacia arriba
    }
  }

  mostrar() {
    if (this.activa) {
      fill(255, 0, 0);
      rect(this.x, this.y, this.ancho, this.alto); // Mostrar las balas
    }
  }

  fueraDePantalla() {
    return this.y < 0; // Las balas salen de la pantalla cuando llegan al límite superior
  }

  colisionaCon(fantasma) {
    // Colisión entre la bala y el fantasma
    return this.x > fantasma.x && this.x < fantasma.x + fantasma.ancho &&
           this.y > fantasma.y && this.y < fantasma.y + fantasma.alto;
  }
}

class Fantasma {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 40;
    this.velocidad = velocidad;
    this.activo = true; // Estado del fantasma
  }

  mover() {
    if (this.activo) {
      this.x += this.velocidad;
      if (this.x > width - this.ancho || this.x < 0) {
        this.velocidad *= -1;
        this.y += 20;
      }
    }
  }

  mostrar() {
    if (this.activo) {
      image(imagenes["fantasma"], this.x, this.y, this.ancho, this.alto);
    }
  }

  haLlegadoAbajo() {
    return this.y > height - 40;
  }
}

class Camara {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 60;
    this.alto = 40;
  }

  mostrar() {
    image(imagenes["camara"], this.x, this.y, this.ancho, this.alto);
  }

  moverDer() {
    this.x = min(this.x + 2, width - this.ancho);
  }

  moverIzq() {
    this.x = max(this.x - 2, 0);
  }

  teclaApretada() {
    if (pantalla === 2 && !juegoTerminado) {
      if (keyCode === LEFT_ARROW) this.moverIzq();
      if (keyCode === RIGHT_ARROW) this.moverDer();
    }
  }

  teclaCapturar() {
    if (key === ' ') this.capturar();
  }

  capturar() {
    capturas.push(new Captura(this.x + this.ancho / 2, this.y));
  }
}

function iniciarJuego() {
  camara = new Camara(width / 2, height - 60);
  fantasmas = [];
  capturas = [];
  juegoTerminado = false;
  gano = false;

  let filas = 3, columnas = 8;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      fantasmas.push(new Fantasma(j * 60 + 30, i * 40 + 40, 1 + i * 0.5));
    }
  }
}

function actualizarJuego() {
  camara.mostrar();

  for (let i = 0; i < capturas.length; i++) {
    capturas[i].mover();
    capturas[i].mostrar();

    if (capturas[i].fueraDePantalla()) {
      capturas[i].activa = false; // Desactivar la bala cuando sale de la pantalla
    }

    for (let j = 0; j < fantasmas.length; j++) {
      if (capturas[i].colisionaCon(fantasmas[j]) && fantasmas[j].activo) {
        capturas[i].activa = false; // Desactivar la bala
        fantasmas[j].activo = false; // Desactivar el fantasma
      }
    }
  }

  for (let i = 0; i < fantasmas.length; i++) {
    fantasmas[i].mover();
    fantasmas[i].mostrar();

    if (fantasmas[i].haLlegadoAbajo()) {
      juegoTerminado = true;
      gano = false;
    }
  }

  if (fantasmas.filter(fantasma => fantasma.activo).length === 0) {
    juegoTerminado = true;
    gano = true;
  }

  if (juegoTerminado) {
    mostrarResultado();
  }
}

function mostrarResultado() {
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text(gano ? "¡Ganaste!" : "¡Perdiste!", width / 2, height / 2);
  textSize(20);
  text("Presiona el botón 'Reiniciar'", width / 2, height / 2 + 40);

  botonVolver.position(width / 2 - 50, height - 130);
}

function mostrarPantallaInicial() {
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text("FATAL FRAME", width / 2, height / 2 - 100);

  textSize(16);
  text("INSTRUCCIONES: \nDerriba a todos los fantasmas antes de que lleguen a ti.\n Usa las flechas para moverte y la barra espaciadora para capturarlos.", width / 2, height / 2);

  botonComenzar.position(width / 2 - 50, height - 130);
  botonCreditos.position(width / 2 - 50, height - 90);
}

function mostrarPantallaCreditos() {
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Juego creado por Tatiana Montenegro.", width / 2, height / 2);

  botonVolver.position(width / 2 - 50, height - 130);
}

function crearBotones() {
  botonComenzar = createButton("COMENZAR");
  botonComenzar.mousePressed(() => {
    pantalla = 2;
    sonido.play();
  });

  botonCreditos = createButton("CREDITOS");
  botonCreditos.mousePressed(() => {
    pantalla = 3;
    sonido.play();
  });

  botonVolver = createButton("VOLVER");
  botonVolver.mousePressed(() => {
    pantalla = 1;
    iniciarJuego();
    sonido.play();
  });

  botonComenzar.position(width / 2 - 50, height - 130);
  botonCreditos.position(width / 2 - 50, height - 90);
  botonVolver.position(width / 2 - 50, height - 130);
}
