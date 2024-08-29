class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto(){
    alert(this.primeiroNome + " " + this.segundoNome)
  }

  media(){
    alert("Média: " + (this.primeiraNota + this.segundaNota) / 2);
  }

  situacao(){
    if((this.primeiraNota + this.segundaNota) / 2 > 6)
      alert("Aprovado");
    else
      alert("Reprovado");
  }
}

  
const arrayAlunos = [new Aluno("Guilherme", "Matheus", 5, 5), new Aluno("João", "Silva", 7, 8), new Aluno("Maria", " Souza", 9, 10), new Aluno("Pedro", "Santos", 4, 3), new Aluno("Ana", "Pereira", 6, 7)];

function iterar(){
  for(let i = 0; i < arrayAlunos.length; i++){
    arrayAlunos[i].nomeCompleto();
    arrayAlunos[i].media();
    arrayAlunos[i].situacao();
  }
}


iterar();