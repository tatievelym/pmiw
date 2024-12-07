/* function iniciarJuego() {
  nave = new Nave(width / 2, height - 40);
  enemigos = [];
  balas = [];
  juegoTerminado = false;
  gano = false;

  let filas = 3, columnas = 8;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      enemigos.push(new Enemigo(j * 60 + 30, i * 40 + 40, 1 + i * 0.5));
    }
  }
}

function actualizarJuego() {
  nave.mostrar();

  balas.forEach((bala, i) => {
    bala.mover();
    bala.mostrar();
    if (bala.fueraDePantalla()) balas.splice(i, 1);
  }
  );

  enemigos.forEach((enemigo, i) => {
    enemigo.mover();
    enemigo.mostrar();

    balas.forEach((bala, j) => {
      if (bala.x > enemigo.x && bala.x < enemigo.x + enemigo.ancho &&
        bala.y > enemigo.y && bala.y < enemigo.y + enemigo.alto) {
        enemigos.splice(i, 1);
        balas.splice(j, 1);
      }
    }
    );

    if (enemigo.haLlegadoAbajo()) {
      juegoTerminado = true;
      gano = false;
    }
  }
  );

  if (enemigos.length === 0) {
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

  // Posicionar botón para reiniciar
  botonVolver.position(width / 2 - 50, height - 130);
  botonVolver.show();
}

function mostrarPantallaInicial() {
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text("JUEGO DE NAVES ESPACIALES", width / 2, height / 2 - 100);

  textSize(16);
  text("INSTRUCCIONES: \nderriba a todos los enemigos antes de que lleguen hasta abajo,\n sino, perderas el juego. \nPuedes moverte de izquierda a derecha con las flechas marcadas en el teclado,\n dispara presionando la barra espaciadora tanto como sea necesario.\n Mucha suerte!!", width / 2, height / 2);

  // Posicionar los botones en la parte inferior
  botonJugar.position(width / 2 - 50, height - 130);
  botonCreditos.position(width / 2 - 50, height - 90);

  botonJugar.show();
  botonCreditos.show();
  botonVolver.hide();
}

function mostrarPantallaCreditos() {
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Juego creado por la alumna Tatiana Montnegro.\n Estudiante de programacion en la \nFacultad de Artes.  ", width / 2, height / 2 - 20);

  // Posicionar el botón "Volver" al final
  botonVolver.position(width / 2 - 50, height - 130);
  botonVolver.show();
  botonJugar.hide();
  botonCreditos.hide();
}

function crearBotones() {
  botonJugar = createButton("COMENZAR");
  botonJugar.mousePressed(() => {
    pantalla = 2;
    botonJugar.hide();
    botonCreditos.hide();
    sonido.play();
  }
  );

  botonCreditos = createButton("CREDITOS");
  botonCreditos.mousePressed(() => {
    pantalla = 3;
    sonido.play();
  }
  );

  botonVolver = createButton("VOLVER");
 botonVolver.mousePressed(() => {
   pantalla = 1;
 iniciarJuego();// Reiniciar el juego al volver a la pantalla principal
    sonido.play()
 }
 );

  botonJugar.hide();
  botonCreditos.hide();
  botonVolver.hide();
}

function keyPressed(){
nave.teclaDisparar();
}
/*
