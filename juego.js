const readline = require("readline"); //Esta línea importa el módulo sirve para poder leer datos escritos por el usuario en la consola.

class Jugador {
    constructor(nombre, simbolo) {
        this.nombre = nombre;
        this.simbolo = simbolo;
    }
}

class Tablero {
    constructor() {
        this.casillas = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

    mostrar() {
        console.log("\n");
        console.log(` ${this.casillas[0]} | ${this.casillas[1]} | ${this.casillas[2]} `);
        console.log("---|---|---");
        console.log(` ${this.casillas[3]} | ${this.casillas[4]} | ${this.casillas[5]} `);
        console.log("---|---|---");
        console.log(` ${this.casillas[6]} | ${this.casillas[7]} | ${this.casillas[8]} `);
        console.log("\n");
    }

    movimientoValido(posicion) {
        const indice = posicion - 1;
        return this.casillas[indice] !== "X" && this.casillas[indice] !== "O";
    }

    colocarSimbolo(posicion, simbolo) {
        const indice = posicion - 1;
        this.casillas[indice] = simbolo;
    }

    hayGanador(simbolo) {
        const c = this.casillas;

        return (
            (c[0] === simbolo && c[1] === simbolo && c[2] === simbolo) ||
            (c[3] === simbolo && c[4] === simbolo && c[5] === simbolo) ||
            (c[6] === simbolo && c[7] === simbolo && c[8] === simbolo) ||
            (c[0] === simbolo && c[3] === simbolo && c[6] === simbolo) ||
            (c[1] === simbolo && c[4] === simbolo && c[7] === simbolo) ||
            (c[2] === simbolo && c[5] === simbolo && c[8] === simbolo) ||
            (c[0] === simbolo && c[4] === simbolo && c[8] === simbolo) ||
            (c[2] === simbolo && c[4] === simbolo && c[6] === simbolo)
        );
    }

    tableroLleno() {
        return this.casillas.every(casilla => casilla === "X" || casilla === "O");
    }
}

class Juego {
    constructor() {
        this.tablero = new Tablero();
        this.jugador1 = new Jugador("Jugador 1", "X");
        this.jugador2 = new Jugador("Jugador 2", "O");
        this.turnoActual = this.jugador1;

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    cambiarTurno() {
        if (this.turnoActual === this.jugador1) {
            this.turnoActual = this.jugador2;
        } else {
            this.turnoActual = this.jugador1;
        }
    }

    pedirMovimiento() {
        this.tablero.mostrar();

        this.rl.question(
            `${this.turnoActual.nombre} (${this.turnoActual.simbolo}), elige una posición (1-9): `,
            (respuesta) => {
                const posicion = parseInt(respuesta);

                if (isNaN(posicion) || posicion < 1 || posicion > 9) {
                    console.log("Entrada no válida. Debes escribir un número del 1 al 9.");
                    this.pedirMovimiento();
                    return;
                }

                if (!this.tablero.movimientoValido(posicion)) {
                    console.log("Esa casilla ya está ocupada. Elige otra.");
                    this.pedirMovimiento();
                    return;
                }

                this.tablero.colocarSimbolo(posicion, this.turnoActual.simbolo);

                if (this.tablero.hayGanador(this.turnoActual.simbolo)) {
                    this.tablero.mostrar();
                    console.log(`¡${this.turnoActual.nombre} ha ganado!`);
                    this.rl.close();
                    return;
                }

                if (this.tablero.tableroLleno()) {
                    this.tablero.mostrar();
                    console.log("Empate. El tablero está lleno.");
                    this.rl.close();
                    return;
                }

                this.cambiarTurno();
                this.pedirMovimiento();
            }
        );
    }

    iniciar() {
        console.log("=================================");
        console.log("      JUEGO 3 EN RAYA");
        console.log("=================================");
        console.log("Jugador 1 = X");
        console.log("Jugador 2 = O");
        this.pedirMovimiento();
    }
}

const juego = new Juego();
juego.iniciar();