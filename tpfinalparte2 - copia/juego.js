class Juego {
    constructor() {
        this.obstaculos = []; // ARREGLO de objetos Obst
        this.tasaSpawn = 30; // Cada cuántos frames aparece un nuevo obstáculo
        this.puntuacion = 0;
        this.perdiste = false;
        this.ganaste = false;
        this.objetivoPuntos = 100; // Puntuación a alcanzar para ganar
    }

    iniciar() {
        this.obstaculos = [];
        this.puntuacion = 0;
        this.perdiste = false;
        this.ganaste = false;
        jugador.reiniciar(); // Reinicia la posición y color del jugador
    }

    actualizar() {
        if (this.perdiste || this.ganaste) return;

        // 1. Spawnea nuevos obstáculos
        if (frameCount % this.tasaSpawn === 0) {
            this.obstaculos.push(new Obst());
        }

        // 2. Mueve, dibuja y verifica colisiones
        for (let i = this.obstaculos.length - 1; i >= 0; i--) {
            let obst = this.obstaculos[i];
            
            obst.caer();
            obst.dibujar();

            // 3. Colisión 
            if (this.detectarColision(obst)) {
                this.perdiste = true;
                jugador.colorColision(); 
                pantalla.p = 'pierde'; // Fin del juego: Pierde
                return;
            }

            // 4. Obstáculo fuera de pantalla (sumar puntos)
            if (obst.fueraDePantalla()) {
                this.obstaculos.splice(i, 1); // Elimina el obstáculo del arreglo
                this.puntuacion += 10;
                
                // 5. Condición de ganar
                if (this.puntuacion >= this.objetivoPuntos) {
                    this.ganaste = true;
                    pantalla.p = 'gana'; // Fin del juego: Gana
                    return;
                }
            }
        }
        
        this.dibujarHUD();
    }
    
    dibujarHUD() {
        // Muestra la puntuación en la pantalla de juego
        fill(0);
        noStroke();
        textSize(24);
        textFont(pantalla.fuente);
        textAlign(LEFT, TOP);
        text('Puntuación: ' + this.puntuacion, 10, 10);
        text('Objetivo: ' + this.objetivoPuntos, 10, 40);
    }
    
    // Detección de colisión (distancia entre centros)
    detectarColision(obst) {
        let d = dist(jugador.x, jugador.y, obst.x, obst.y);
        // Usa el radio para una colisión circular aproximada
        return d < (jugador.radio + obst.radio); 
    }
}
