function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repetir(params) {
    let arregloRepetido = arreglo;
    return arreglo-arregloRepetido;
}

function convertirString(arreglo) {
    let resultado = arreglo.map(elemento => elemento.toString());
    return resultado;
}

function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0);
    }
    return x;
}

console.log(convertirString([1, 2, 3]));

console.log(dosDimensiones(5));