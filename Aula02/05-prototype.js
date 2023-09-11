class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimento() {
    return `Olá ${this.nome}`;
  }
}

const pessoa = new Pessoa('Diego', 32);
console.log(pessoa.cumprimento()); // Olá Diego

Pessoa.prototype.tipo = 'Humano';
console.log(pessoa.tipo); // Humano

pessoa.__proto__.suaIdade = function() { // arrow function não funciona aqui
  return `Sua idade é ${this.idade}`;
};

console.log(pessoa.suaIdade()) // Sua idade é 32

const pessoa2 = new Pessoa('Otaviano', 25);
console.log(pessoa2.suaIdade()); // Sua idade é 25
