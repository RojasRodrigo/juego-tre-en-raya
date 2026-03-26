# Juego 3 en Raya en JavaScript

## Descripción
Este proyecto es un juego de **3 en raya** desarrollado en **JavaScript** usando **Programación Orientada a Objetos (POO)**.  
El juego funciona únicamente en la **consola** y permite que dos jugadores jueguen por turnos.

## Características
- Desarrollado en JavaScript
- Uso de clases y objetos
- Juego para 2 jugadores
- Validación de jugadas
- Detección de ganador
- Detección de empate
- Interfaz simple por consola

## Estructura del proyecto
El proyecto contiene un archivo principal:

- `juego.js`

## Clases utilizadas

### Jugador
Representa a cada jugador del juego.
Tiene:
- nombre
- símbolo (`X` o `O`)

### Tablero
Representa el tablero de 3x3.
Se encarga de:
- mostrar el tablero
- validar movimientos
- colocar símbolos
- verificar si hay ganador
- verificar si el tablero está lleno

### Juego
Controla la lógica general del juego.
Se encarga de:
- crear a los jugadores
- crear el tablero
- manejar turnos
- pedir movimientos
- iniciar el juego

## Requisitos
Para ejecutar este proyecto necesitas tener instalado:

- [Node.js](https://nodejs.org/)

## Cómo ejecutar el proyecto

```bash
node juego.js
```
## Cómo jugar
- Escribes un número del 1 al 9
- Presionas ENTER
- Se coloca tu símbolo
- Luego juega el otro jugador
