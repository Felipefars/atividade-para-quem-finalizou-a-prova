// Declara uma variável texto
let texto = "Aprendendo JavaScript é divertido e recompensador!";

// Converte o valor de texto para maiúsculas e exibe no console
console.log(texto.toUpperCase());

// Verifica se texto contém a palavra "divertido" e exibe o resultado no console
console.log(texto.includes("divertido"));

// Divide texto em um array de palavras e exibe o array resultante no console
let arrayPalavras = texto.split(" ");
console.log(arrayPalavras);

// Junta as palavras do array resultante em uma única string, separadas por hífens, e exibe o resultado no console
let textoComHifens = arrayPalavras.join("-");
console.log(textoComHifens); 