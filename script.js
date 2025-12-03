function mostrarResultado(idResultado, idConteudo, mensagem) {
  const caixaResultado = document.getElementById(idResultado);
  
  const caixaConteudo = document.getElementById(idConteudo);
  
  caixaConteudo.innerHTML = mensagem;
  
  caixaResultado.classList.add('show');
}

function exercicio1() {
  const numero = Number(document.getElementById('input1').value);
  
  let resultado;

  if (numero > 0) {
    resultado = 'O número ' + numero + ' é POSITIVO';
  } else if (numero < 0) {
    resultado = 'O número ' + numero + ' é NEGATIVO';
  } else {
    resultado = 'O número é ZERO';
  }
  
  mostrarResultado('result1', 'content1', resultado);
}

function exercicio2() {
  const idade = Number(document.getElementById('input2').value);
  
  let resultado;
  
  if (idade >= 18) {
    resultado = 'Com ' + idade + ' anos, você é MAIOR DE IDADE';
  } else {
    resultado = 'Com ' + idade + ' anos, você é MENOR DE IDADE';
  }
  
  mostrarResultado('result2', 'content2', resultado);
}

function exercicio3() {
  const numero = Number(document.getElementById('input3').value);
  
  let resultado;
  
  if (numero % 2 === 0) {
    resultado = 'O número ' + numero + ' é PAR';
  } else {
    resultado = 'O número ' + numero + ' é ÍMPAR';
  }
  
  mostrarResultado('result3', 'content3', resultado);
}


function exercicio4() {
  const numero1 = Number(document.getElementById('input4a').value);
  const numero2 = Number(document.getElementById('input4b').value);
  
  let resultado;
  
  if (numero1 > numero2) {
    resultado = numero1 + ' é maior que ' + numero2;
  } else if (numero1 < numero2) {
    resultado = numero2 + ' é maior que ' + numero1;
  } else {
    resultado = 'Os números são IGUAIS';
  }
  
  mostrarResultado('result4', 'content4', resultado);
}

function exercicio5() {
  const nota = Number(document.getElementById('input5').value);
  
  let resultado;
 
  if (nota >= 0 && nota <= 4) {
    resultado = 'Nota ' + nota + ': Classificação BAIXA';
  } else if (nota >= 5 && nota <= 7) {
    resultado = 'Nota ' + nota + ': Classificação MÉDIA';
  } else if (nota >= 8 && nota <= 10) {
    resultado = 'Nota ' + nota + ': Classificação ALTA';
  } else {
    resultado = 'Nota inválida! Digite um valor entre 0 e 10';
  }
  
  mostrarResultado('result5', 'content5', resultado);
}

function exercicio6() {
  const peso = Number(document.getElementById('input6a').value);
  const altura = Number(document.getElementById('input6b').value);
  
  const imc = peso / (altura * altura);
  
  let classificacao;
  
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = 'Peso normal';
  } else {
    classificacao = 'Acima do peso';
  }
  
  const resultado = 'Seu IMC é: ' + imc.toFixed(2) + ' - Classificação: ' + classificacao;
  
  mostrarResultado('result6', 'content6', resultado);
}

function exercicio7() {
  const numero1 = Number(document.getElementById('input7a').value);
  const numero2 = Number(document.getElementById('input7b').value);
  const operacao = document.getElementById('input7op').value;
  
  let resultado;
  
  switch (operacao) {
    case '+':
      resultado = numero1 + ' + ' + numero2 + ' = ' + (numero1 + numero2);
      break;
    case '-':
      resultado = numero1 + ' - ' + numero2 + ' = ' + (numero1 - numero2);
      break;
    case '*':
      resultado = numero1 + ' * ' + numero2 + ' = ' + (numero1 * numero2);
      break;
    case '/':
      if (numero2 !== 0) {
        resultado = numero1 + ' / ' + numero2 + ' = ' + (numero1 / numero2).toFixed(2);
      } else {
        resultado = 'ERRO: Não é possível dividir por zero';
      }
      break;
    default:
      resultado = 'Operação inválida';
  }
  
  mostrarResultado('result7', 'content7', resultado);
}

function exercicio8() {
  const dia = Number(document.getElementById('input8').value);
  
  let resultado;
  
  switch (dia) {
    case 1:
      resultado = 'Dia 1: Domingo';
      break;
    case 2:
      resultado = 'Dia 2: Segunda-feira';
      break;
    case 3:
      resultado = 'Dia 3: Terça-feira';
      break;
    case 4:
      resultado = 'Dia 4: Quarta-feira';
      break;
    case 5:
      resultado = 'Dia 5: Quinta-feira';
      break;
    case 6:
      resultado = 'Dia 6: Sexta-feira';
      break;
    case 7:
      resultado = 'Dia 7: Sábado';
      break;
    default:
      resultado = 'Número inválido! Digite um valor entre 1 e 7';
  }
  
  mostrarResultado('result8', 'content8', resultado);
}

function exercicio9() {
  const numero1 = Number(document.getElementById('input9a').value);
  const numero2 = Number(document.getElementById('input9b').value);
  
  let resultado;
  
  if (numero1 % numero2 === 0) {
    resultado = numero1 + ' É múltiplo de ' + numero2;
  } else {
    resultado = numero1 + ' NÃO é múltiplo de ' + numero2;
  }
  
  mostrarResultado('result9', 'content9', resultado);
}

function exercicio10() {
  const usuarioCorreto = 'administrador';
  const senhaCorreta = '12345';
  
  const usuario = document.getElementById('input10a').value;
  const senha = document.getElementById('input10b').value;
  
  let resultado;

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    resultado = 'Login bem-sucedido! Bem-vindo, ' + usuario;
  } else {
    resultado = 'Usuário ou senha incorretos. Tente novamente';
  }
  
  mostrarResultado('result10', 'content10', resultado);
}