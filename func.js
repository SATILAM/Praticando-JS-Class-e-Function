function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.apresentar = function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
  // Exemplo de uso
  const pessoa1 = new Pessoa("Átila", 37);
  pessoa1.apresentar();