// exemplo de atributos/métodos estáticos
class Conta {
  static numeroConta = 0;
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
    Conta.numeroConta++;
  }
}

const c1 = new Conta('Diego', 213123);
console.log(c1.numeroConta); // undefined - numeroConta não existe na instância
const c2 = new Conta('Diego2', 213123);
console.log(Conta.numeroConta); // 2 -> numeroConta, atributo da classe Conta, tem 2 contas cadastradas