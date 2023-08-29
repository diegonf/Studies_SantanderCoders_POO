// comparando POO com paradigma funcional

// ex: modelo funcional
const agenda = {
  contatos: [
    {
      nome: 'contato 1',
      tel: '',
      email: 'sds@gmai.com'
    },
    {
      nome: 'contato 2',
      tel: '',
      email: 'sds@gmai.com'
    }
  ],
  adicionar: function(contato) {
    this.contatos.push(contato);
  }
}

const a = agenda;
a.adicionar({nome: 'contato 3', tel: 'tel3', email: 'email3@gmail.com'})
console.log(a.contatos[2])


// POO
class Agenda {
  #contatos = [];
  constructor() {
  }
  set contatos(contato) {  // tentar manter o mesmo nome do atributo que ele manipula
    this.#contatos.push(contato);
  }
  get contatos(){
    return this.#contatos;
  }
  adicionarContato(contato){
    this.contatos = contato; // esse cara chama o set contatos(contato)
  }
}

const ag = new Agenda();
ag.contatos = { // método 1 de adicionar - chamando o set
  nome: 'contato 1', 
  tel: 'tel1',
  email: 'email1@gmail.com'
}
ag.adicionarContato({ // método 2 de adicionar - chamando o método adicionarContato
  nome: 'contato 2', 
  tel: 'tel2',
  email: 'email2@gmail.com'
})
// nesse caso as duas formas fazem a mesma coisa, então está redundante. Poderia tirar uma delas, ou poderia criar algum tipo de validação em um deles, etc.
console.log(ag)
console.log(ag.contatos)


class Agenda2 {
  #contatos = [];
  constructor() {
  }
  set contatos(contato) {  // tentar manter o mesmo nome do atributo que ele manipula
    if(this.validarContato(contato)) this.#contatos.push(contato);
  }
  get contatos(){
    return this.#contatos;
  }
  validarContato(contato){
    return contato.nome.trim() !== '';
  }
}

const ag2 = new Agenda2();
ag2.contatos = {  // não é adicionado (não passa na validação)
  nome: '     ', 
  tel: 'tel1',
  email: 'email1@gmail.com'
}
ag2.contatos = { 
  nome: 'contato 2', 
  tel: 'tel2',
  email: 'email2@gmail.com'
}
console.log(ag2)
console.log(ag2.contatos)

// com classe contato
class Contato {
  #nome;
  #telefone;
  #email;
  constructor(nome, telefone, email){
    this.#nome = nome;
    this.#telefone = telefone;
    this.#email = email;
  }
  get nome() {
    return this.#nome;
  }
  get telefone() {
    return this.#telefone;
  }
  get email() {
    return this.#email;
  }
}

class Agenda3 {
  #contatos = [];
  constructor() {
  }
  set contatos(contato) {  // tentar manter o mesmo nome do atributo que ele manipula
    if(this.validarContato(contato)) this.#contatos.push(contato);
  }
  get contatos(){
    return this.#contatos;
  }
  validarContato(contato){
    return contato.nome.trim() !== '';
  }
}

const ag3 = new Agenda3();
ag3.contatos = new Contato('contato 1', '1111', 'email@1')
ag3.contatos = new Contato('contato 2', '2222', 'email@2')
console.log(ag3)
console.log(ag3.contatos)
console.log(ag3.contatos[0].nome, ag3.contatos[0].telefone, ag3.contatos[0].email)