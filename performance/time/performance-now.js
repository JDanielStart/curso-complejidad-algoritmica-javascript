function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

const inicioDeTiempo = performance.now();
contar(5);
const finalDeTiempo = performance.now();
let duracion = finalDeTiempo - inicioDeTiempo;

console.log(`El algoritmo ha durado ${duracion}ms.`);