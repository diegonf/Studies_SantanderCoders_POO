// exemplo de encapsulamento
class Utils {
  static #totalContas = 0;
  constructor() {}
  
  static totalContas() {
    return Utils.#totalContas;
  }
  static novoNumeroConta() {
    return ++Utils.#totalContas;
  }
}

class Conta {
  #numeroConta;
  #saldo;
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
    this.#numeroConta = Utils.novoNumeroConta(); // passando a responsabilidade para o classe Utils
  }
  set saldo(saldo){
    this.#saldo = saldo;
  }
  get saldo(){
    return this.#saldo;
  }
  get numeroConta(){
    return this.#numeroConta;
  }
}



const c1 = new Conta('Diego', 213123);
c1.saldo = 1000;
console.log(c1);
console.log(c1.saldo);

const c2 = new Conta('Diego2', 213123);
console.log(c1.numeroConta);
console.log(c2.numeroConta);
console.log(Utils.totalContas());