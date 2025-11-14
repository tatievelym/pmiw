let jugador;
let pantalla;
let boton;
let juego; // Nueva instancia de la clase Juego

// --- Configuración Inicial ---
function preload() {
  pantalla = new pantallas();
  pantalla.cargar();
}

function setup() {
  createCanvas(640, 480);
  cursor('shurikenCursor.png');

  // Inicialización de las clases
  jugador = new personaje();
  juego = new Juego(); // Inicializa la lógica del juego
  boton = new Boton();
  boton.crearBotones();
}

function draw() {
  pantalla.dibujar();

  // Solo dibujar los elementos del juego y botones si estamos en la pantalla 'juego'
  // y el juego está activo (no ha terminado ni ganado)
  if (pantalla.p === 'juego' && !juego.perdiste && !juego.ganaste) {
    juego.actualizar();
    jugador.dibujar();
  } else if (pantalla.p === 'juego' && (juego.perdiste || juego.ganaste)) {
    // Si el juego terminó (ganó o perdió), solo dibujamos al jugador en su posición final
    jugador.dibujar();
  }

  // Dibuja los botones en la pantalla actual
  boton.botonesPantalla();
}

function keyPressed() {
  // Solo se permite el movimiento si el juego está activo
  if (pantalla.p === 'juego' && !juego.perdiste && !juego.ganaste) {
    jugador.mover();
  }
}

function mouseReleased() {
  boton.cambioPantalla();
}
