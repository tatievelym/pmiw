boton = [
  [505, 430, 96, 44, 'iniciar'], // 0
  [30, 430, 130, 44, 'creditos'], // 1
  [30, 10, 82, 44, 'inicio'], // 2
  [30, 10, 130, 44, 'reiniciar'], // 3
  [505, 430, 56, 44, 'NO'], // 4
  [30, 430, 36, 44, 'SI'], // 5
  [460, 430, 150, 44, 'intentarlo'], // 6
  [30, 430, 185, 44, 'otro camino'], // 7
  [244, 430, 153, 44, 'agarrarse'], // 8
  [460, 430, 126, 44, 'escapar'], // 9
  [30, 430, 149, 44, 'quedarse'], // 10
  ]

  function dibujarBoton(x, y, w, h, texto, corner) {
  // hover
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(228, 0, 2);
    noStroke();
  } else {
    fill(255);
    stroke(0);
    strokeWeight(1);
  }
  // botón
  rect(x, y, w, h, corner);

  // texto
  fill(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h ? 255 : 0);
  text(texto, x + 5, y);
}

function botones() {
  let corner = 16;
  push();
  textFont(fuente);
  textSize(32);
  textAlign(LEFT, TOP);


  if (estado == 'inicio') {
    for (let i = 0; i < 2; i++) {
      let [x, y, w, h, texto] = boton[i];
      dibujarBoton(x, y, w, h, texto, corner);
    }
  } else if (estado == 'creditos') {
    let [x, y, w, h, texto] = boton[2];
    dibujarBoton(x, y, w, h, texto, corner);
  } else if (estado == 'reiniciar') {
    let [x, y, w, h, texto] = boton[3];
    dibujarBoton(x, y, w, h, texto, corner);
  } else if (estado == 'decision' && p== 2) {   //aceptar sueter?
    for (let i = 4; i < 6; i++) {
      let [x, y, w, h, texto] = boton[i];
      dibujarBoton(x, y, w, h, texto, corner);
    }
  } else if (estado == 'decision' && p== 5) {   //subir o buscar otro camino?
    for (let i = 6; i < 8; i++) {
      let [x, y, w, h, texto] = boton[i];
      dibujarBoton(x, y, w, h, texto, corner);
    }
  } else if (estado == 'decision' && p== 10) {   //se agarra?
    for (let i = 8; i < 9; i++) {
      let [x, y, w, h, texto] = boton[i];
      dibujarBoton(x, y, w, h, texto, corner);
    }
  } else if (estado == 'decision' && p== 17) {   //se agarra?
    for (let i = 9; i <=10; i++) {
      let [x, y, w, h, texto] = boton[i];
      dibujarBoton(x, y, w, h, texto, corner);
    }
  }


  pop();
}
function mouseReleased() {
  for (let i = 0; i < boton.length; i++) {
    let x = boton[i][0];
    let y = boton[i][1];
    let w = boton[i][2];
    let h = boton[i][3];

    if ( mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      if (i == 0 && estado == 'inicio') { // Iniciar
        sonidoClic.play();
        estado = 'juego';
        p = 1;
        tiempoInicio = millis();
        console.log('estas apretando en iniciar');
      } else if (i == 1 && estado == 'inicio') { // Créditos
        sonidoClic.play();
        estado = 'creditos';
        p = 0;
        console.log('estas apretando en creditos');
      } else if (i == 2 && estado == 'creditos') { // Créditos
        sonidoClic.play();
        estado = 'inicio';
        p = 0;
        console.log('estas apretando en inicio');
      } else if (i == 3 && estado == 'reiniciar') { // Reiniciar
        sonidoClic.play();
        estado = 'inicio';
        p = 0;
        tiempoInicio = millis();
        console.log('estas apretando en iniciar');
      } else if (estado == 'decision' && p== 2) { // decisiones si o no
        if (i == 4) {              // Botón NO
          sonidoClic.play();
          estado = 'juego';
          p = 3;
          tiempoInicio = millis();
          console.log('no acepta el sueter:', p);
        } else if (i == 5) {       // Botón SI
          sonidoClic.play();
          estado = 'juego';
          p = 4;
          tiempoInicio = millis();
          console.log('si acepta el sueter:', p);
        }
      } else if (estado == 'decision' && p== 5) { // decisiones intentarlo u otro camino
        if (i == 6) {               // Botón intentarlo
          sonidoClic.play();
          estado = 'juego';
          p = 6;
          tiempoInicio = millis();
          console.log('intentarlo:', p);
        } else if (i == 7) {        // Botón otro camino
          sonidoClic.play();
          estado = 'juego';
          p = 13;
          tiempoInicio = millis();
          console.log(' otro camino:', p);
        }
      } else if (estado == 'decision' && p== 10) { // decision agarrarse
        if (i == 8) {               // Botón agarrarse
          sonidoClic.play();
          estado = 'juego';
          p = 15;
          tiempoInicio = millis();
          console.log('se agarra', p);
        }
      } else if (estado == 'decision' && p == 17) { // decisiones quedarse o escapar
        if (i == 9) {               // Botón escapar
          sonidoClic.play();
          estado = 'juego';
          p = 18;
          tiempoInicio = millis();
          console.log('escapa:', p);
        } else if (i == 10) {       // Botón quedar
          sonidoClic.play();
          estado = 'juego';
          p = 19;
          tiempoInicio = millis();
          console.log(' otro camino:', p);
        }
      }
    }
  }
}
