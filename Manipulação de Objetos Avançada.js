// Cria o objeto pessoa com as propriedades nome, idade, profissao, e endereco
let pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor',
    endereco: {
        rua: 'Rua das Flores',
        cidade: 'São Paulo',
        estado: 'SP'
    },
    // Adiciona o método apresentacao ao objeto pessoa
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

// Acessa e exibe o valor da propriedade cidade do endereco no console
console.log(pessoa.endereco.cidade);  // São Paulo

// Atualiza a propriedade profissao para um novo valor e exibe o objeto atualizado no console
pessoa.profissao = 'Engenheiro';
console.log(pessoa);

// Adiciona uma nova propriedade telefone ao objeto pessoa e exibe o objeto atualizado no console
pessoa.telefone = '1234-5678';
console.log(pessoa);
