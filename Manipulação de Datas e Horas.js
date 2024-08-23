// Cria uma data representando o próximo aniversário
let aniversario = new Date('2024-09-15'); // Substitua pela data do seu próximo aniversário

// Cria uma data representando a data atual
let dataAtual = new Date();

// Calcula a diferença em dias entre a data atual e o próximo aniversário
let diffTempo = aniversario - dataAtual;
let diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));
console.log(`Diferença em dias até o próximo aniversário: ${diffDias} dias`);

// Formata a data atual no formato "YYYY-MM-DD"
let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
let dataFormatada = `${ano}-${mes}-${dia}`;
console.log(`Data atual formatada: ${dataFormatada}`);

// Adiciona 30 dias à data atual
let novaData = new Date(dataAtual);
novaData.setDate(novaData.getDate() + 30);
let anoNovaData = novaData.getFullYear();
let mesNovaData = String(novaData.getMonth() + 1).padStart(2, '0');
let diaNovaData = String(novaData.getDate()).padStart(2, '0');
let novaDataFormatada = `${anoNovaData}-${mesNovaData}-${diaNovaData}`;
console.log(`Data atual mais 30 dias: ${novaDataFormatada}`);
