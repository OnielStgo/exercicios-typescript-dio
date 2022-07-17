class Pessoa {
  private nome:string;
  private idade:number;
  private profissao:string;

  constructor(nome:string, idade:number, profissao:string){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

let  pessoa1 = new Pessoa("Maria", 29, "Atriz");
let pessoa2 = new Pessoa("Roberto", 19, "Padeiro");
let pessoa3 = new Pessoa("Laura", 32, "Atriz");
let pessoa4 = new Pessoa("Carlos", 19, "Padeiro");
console.log(pessoa1)