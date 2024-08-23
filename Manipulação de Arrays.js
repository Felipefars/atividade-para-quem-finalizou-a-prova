// Declara um array numeros com os valores [10, 20, 30, 40, 50]
let numeros = [10, 20, 30, 40, 50];

// Usa o método push para adicionar o valor 60 ao final do array e exibe o array atualizado no console
numeros.push(60);
console.log(numeros);  // [10, 20, 30, 40, 50, 60]

// Usa o método pop para remover o último valor do array, exibe o valor removido e o array atualizado no console
let removido = numeros.pop();
console.log(removido);  // 60
console.log(numeros);   // [10, 20, 30, 40, 50]

// Usa o método splice para remover o terceiro elemento do array (número 30) e exibe o array atualizado no console
numeros.splice(2, 1);  // Remove o elemento no índice 2
console.log(numeros);  // [10, 20, 40, 50]

// Ordena o array em ordem decrescente e exibe o resultado no console
numeros.sort((a, b) => b - a);
console.log(numeros);  // [50, 40, 20, 10]
