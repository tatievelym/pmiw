
function preload() {
  imagenes["inicio"] = loadImage("data/img1.jpg");
  imagenes["juego"] = loadImage("data/img2.jpg");
  imagenes["creditos"] = loadImage("data/img4.jpg");
  imagenes["instrucciones"] = loadImage("data/img3.jpg");
}


function iniciarJuego() {
  nave = new Nave(width / 2, height - 40);
  balas = [];
  fragmentos = [];
  obstáculos = [];
  juegoTerminado = false;
  gano = false;

  for (let i = 0; i < 5; i++) {
    obstáculos.push(new Obstacle(i * 100 + 50, 40));
  }
}

function actualizarJuego() {
  nave.mostrar();

  balas.forEach((bala, i) => {
    bala.mover();
    bala.mostrar();

    if (bala.fueraDePantalla()) {
      balas.splice(i, 1);
      return; // Salimos para evitar problemas al iterar después de eliminar
    }

    // Verificar colisión con fragmentos
    fragmentos.forEach((fragmento, j) => {
      if (
        bala.x > fragmento.x - 5 && // Tamaño del fragmento (10px de diámetro)
        bala.x < fragmento.x + 5 &&
        bala.y > fragmento.y - 5 &&
        bala.y < fragmento.y + 5
        ) {
        fragmentos.splice(j, 1); // Eliminar fragmento
        balas.splice(i, 1);     // Eliminar bala
        return;                 // Salimos del bucle actual
      }
    }
    );
  }
  );

  obstáculos.forEach((obstaculo, i) => {
    obstaculo.mostrar();
    if (obstaculo.haColisionadoConBala(balas)) {
      obstáculos.splice(i, 1);
    }
  }
  );

  fragmentos.forEach((fragmento, i) => {
    fragmento.mover();
    fragmento.mostrar();

    // Verificar colisión entre fragmentos y la nave
    if (
      fragmento.x > nave.x &&
      fragmento.x < nave.x + nave.ancho &&
      fragmento.y > nave.y &&
      fragmento.y < nave.y + nave.alto
      ) {
      juegoTerminado = true;
      gano = false; // Si colisiona con un fragmento, el jugador pierde
    }

    if (fragmento.fueraDePantalla()) fragmentos.splice(i, 1);
  }
  );

  if (obstáculos.length === 0 && fragmentos.length === 0) {
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
  botonVolver.position(width / 2 - 50, height - 50);
  botonVolver.show();
}


function mostrarPantallaInicial() {
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text("JUEGO DE CARRERAS", width / 2, height / 2 - 100);

  botonComenzar.position(width / 2 - 180, height - 50);
  botonCreditos.position(width / 2 - 50, height - 50);
  botonInstrucciones.position(width / 2 + 80, height - 50);

  botonComenzar.show();
  botonCreditos.show();
  botonInstrucciones.show();
  botonVolver.hide();
}

function mostrarPantallaCreditos() {
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Juego creado por Pepito.", width / 2, height / 2);
  botonVolver.position(width / 2 - 50, height - 50);
  botonVolver.show();
  ocultarBotonesPrincipales();
}


function mostrarPantallaInstrucciones() {
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Usa flechas para moverte.\nDispara con la barra espaciadora.", width / 2, height / 2);
  botonVolver.position(width / 2 - 50, height - 50);
  botonVolver.show();
  ocultarBotonesPrincipales();
}



function crearBotones() {
  botonComenzar = createButton('COMENZAR');
  botonComenzar.mousePressed(() => {
    pantalla = 2;
    iniciarJuego();
    ocultarBotonesPrincipales();
  }
  );

  botonCreditos = createButton('CREDITOS');
  botonCreditos.mousePressed(() => pantalla = 3);

  botonInstrucciones = createButton('INSTRUCCIONES');
  botonInstrucciones.mousePressed(() => pantalla = 4);

  botonVolver = createButton('VOLVER');
  botonVolver.mousePressed(() => pantalla = 1);
}



function ocultarBotonesPrincipales() {
  botonComenzar.hide();
  botonCreditos.hide();
  botonInstrucciones.hide();
}

function keyPressed() {
  if (pantalla === 2 && !juegoTerminado) {
    if (keyCode === LEFT_ARROW) nave.mover(-1);
    if (keyCode === RIGHT_ARROW) nave.mover(1);
    if (keyCode === 32) nave.disparar();
  }
}
