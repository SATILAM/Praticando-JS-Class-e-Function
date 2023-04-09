class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  
    idadeEmDias() {
      const diasPorAno = 365;
      return this.idade * diasPorAno;
    }
  } 
  

  // Exemplo de uso
  const pessoa1 = new Pessoa("Átila", 37);
  pessoa1.apresentar();
  console.log(pessoa1.idadeEmDias());
// Output: 13505