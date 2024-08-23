// Declara uma função soma que aceite dois parâmetros e retorne a soma deles
function soma(a, b) {
    return a + b;
}

// Declara uma função ehPar que receba um número como parâmetro e retorne true se o número for par, ou false se for ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}

// Declara uma função dobraValores que receba um array de números e retorne um novo array com cada valor dobrado
function dobraValores(array) {
    return array.map(valor => valor * 2);
}

// Cria uma função contaCaracteres que receba uma string e retorne o número de caracteres na string
function contaCaracteres(string) {
    return string.length;
}

// Declara uma função fatorial que calcule o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplos de uso:
console.log(soma(5, 7));           // 12
console.log(ehPar(10));            // true
console.log(ehPar(11));            // false
console.log(dobraValores([1, 2, 3])); // [2, 4, 6]
console.log(contaCaracteres('Olá!')); // 4
console.log(fatorial(5));          // 120
