function videos() {
  if (estado == 'intro') {
    image(video, 0, 0, width, height);
  }
  if (estado == 'finalB') {
    image(videoFinalB, 0, 0, width, height);
  }
  if (estado == 'finalBR') {
    image(videoFinalBR, 0, 0, width, height);
  }
}

function mousePressed() {
  if (estado == 'intro') {
    video.play();
  }
}
function cargarVideos() {

  video = createVideo('videos/intro.mp4');
  video.hide();
  video.onended(() => {
    video.hide();
    estado = 'inicio';
  }
  );

  videoFinalB = createVideo('videos/finalB.mp4')
  videoFinalB.hide();
  videoFinalB.onended(() => {
    estado = 'reiniciar';
    videoFinalB.hide();
  }
  );


  videoFinalBR = createVideo('videos/finalBR.mp4');
  videoFinalBR.hide();
  videoFinalBR.onended(() => {
    videoFinalBR.hide();
    estado = 'reiniciar';
  }
  );
}

function cambiarEstado(nuevoEstado) {
  estado = nuevoEstado;
  if (estado == 'finalB') {
    image(videoFinalB, 0, 0, width, height);
    videoFinalB.play();
  } else if (estado == 'finalBR') {
    videoFinalBR.play();
  }
}
