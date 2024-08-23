// Declara uma função executaOperacao que aceite dois números e uma função de operação como parâmetros
function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

// Função de soma
function soma(a, b) {
    return a + b;
}

// Função de multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Usa a função executaOperacao para somar dois números, passando a função soma como callback
let resultadoSoma = executaOperacao(5, 7, soma);
console.log(`Resultado da soma: ${resultadoSoma}`);  // Resultado da soma: 12

// Usa a função executaOperacao para multiplicar dois números, passando a função multiplicacao como callback
let resultadoMultiplicacao = executaOperacao(4, 6, multiplicacao);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);  // Resultado da multiplicação: 24

// Cria uma função repetirOperacao que aceite um número e uma função de operação
function repetirOperacao(numero, operacao) {
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
        resultado = operacao(resultado, i);
        console.log(`Iteração ${i}: ${resultado}`);
    }
}

// Usa a função repetirOperacao para repetir a operação de soma 5 vezes
repetirOperacao(5, (total, i) => total + i);  // Exemplo de soma incremental

// Declara uma função contarOcorrencias que receba uma string e um caractere
function contarOcorrencias(string, caractere) {
    let contador = 0;
    string.split('').forEach(char => {
        if (char === caractere) {
            contador++;
        }
    });
    console.log(`O caractere '${caractere}' aparece ${contador} vezes na string.`);
}

// Usa a função contarOcorrencias para contar as ocorrências de um caractere em uma string
contarOcorrencias('abracadabra', 'a');  // O caractere 'a' aparece 5 vezes na string.
