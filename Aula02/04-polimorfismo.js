class Pessoa {
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  cumprimento(){
    return 'Olá humano!'
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade);
  }
  cumprimento(){
    return 'Olá aluno!';
  }
}

class Professor extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade);
  }
  cumprimento(){
    return 'Olá professor!';
  }
}

class Profissional extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade);
  }
}

const humano = new Pessoa();
const aluno = new Aluno();
const prof = new Professor();
const profissional = new Profissional();

console.log(humano.cumprimento()); // comportamento da superclasse
console.log(aluno.cumprimento()); // comportamento específico
console.log(prof.cumprimento()); // comportamento específico
console.log(profissional.cumprimento()); // comportamento genérico da super classe

// Em polimorfismo, cada especialização pode assumir um comportamento específico, ou usar o comportamento genérico super classe
