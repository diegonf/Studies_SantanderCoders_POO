/* 
  Classes
    É tipo um projeto, que fala tudo o que um objeto vai ter de características.
    Ex:
      Carro (UML)
      Nome: Carro
      Atributos: marca, modelo, etc
      Métodos: ligar, desligar, frear, etc 
*/

class Quadrado {
  constructor (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') 
      throw Error ('a e b devem ser números');
    this.a = a;
    this.b = b;
    this.cor = undefined;
  };
  calcularArea() {
    return this.a * this.b;
  }
};

const q1 = new Quadrado(10,5); // inicia o objeto
q1.cor = 'red'; // acessa um atributo do objeto
console.log(q1);
const area = q1.calcularArea(); // acessa um método do objeto
console.log(area);
