var aluno = "Guilherme Matheus de Jesus de Araujo";

var media = medianota();

var nota1 = 5;
var nota2 = 5;

//document.getElementById("nome").innerHTML = aluno;




function questao1(){
  alert("Alerta! Você clicou na questão 1");
}

function questao2(){
  alert("Você ganhou pontos a mais nas suas notas!");
  nota1 = nota1 + 3;
  nota2 = nota2 + 2;
}

function questao3(){
  alert("Suas informações:");
  alert("Nome: " + aluno);
  alert("Nota 1: " + nota1);
  alert("Nota 2: " + nota2);
  alert("Média: " + medianota())
}

function medianota(){
  return (nota1 + nota2) / 2;
}

function dadonome(){
  alert("Aqui está seu nome na tela!")
  document.getElementById("nome").innerHTML = aluno;
  
}