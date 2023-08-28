class Pessoa {
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class PessoaFisica extends Pessoa {
  constructor (nome, idade, cpf) {
    super(nome, idade);
    this.cpf = cpf;
  }
}

class PessoaJuridica extends Pessoa {
  constructor(nome, idade, cnpj){
    super(nome, idade);
    this.cnpj = cnpj;
  }
}

const humano = new PessoaFisica('Diego', 30, 123423, 47241);
const pj = new PessoaJuridica('AJN', 50, 21321321);
console.log(humano);
console.log(pj)
