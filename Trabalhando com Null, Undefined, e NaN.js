// Declara uma variável nulo e atribui o valor null
let nulo = null;

// Verifica se nulo é igual a undefined (usando ==) e exibe o resultado no console
console.log(nulo == undefined);  // true

// Verifica se nulo é estritamente igual a undefined (usando ===) e exibe o resultado no console
console.log(nulo === undefined);  // false

// Declara uma variável indefinido sem atribuir nenhum valor
let indefinido;

// Verifica se indefinido é NaN usando a função isNaN e exibe o resultado no console
console.log(isNaN(indefinido));  // true

// Declara uma variável numStr2 com o valor "123abc" (string)
let numStr2 = "123abc";

// Tenta convertê-la para um número
let convertido = Number(numStr2);

// Verifica se o resultado é NaN e exibe o resultado no console
console.log(isNaN(convertido));  // true
