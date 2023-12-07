function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

let tiempo = console.time(`Duración del algoritmo contar`);
contar(5);
tiempo = console.timeEnd(`Duración del algoritmo contar`);