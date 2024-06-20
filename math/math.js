// Comparação entre números em relação à maior, menor ou igual
function compararNumeros() {
    let a, b;
    alert('Comparar números');
    a = parseFloat(prompt("Digite o primeiro número:"));
    b = parseFloat(prompt("Digite o segundo número:"));

    if (a > b) {
        alert(`${a} é maior que ${b}`);
    } else if (a === b) {
        alert(`${a} é igual a ${b}`);
    } else if (a < b){
        alert(`${a} é menor que ${b}`);
    } else {
        alert('Digite números válidos!')
    }
}

// Cálculo de média onde o usuário indica a quantidade de números a serem digitados

function calcularMedia() {
    let qtdNums, numero = 0, media = 0, controle = 0;
    qtdNums = parseInt(prompt("Digite a quantidade de números que deseja realizar a média:"));
    while (controle < qtdNums) {
        numero += parseInt(prompt("Digite um número:"));
        controle++;
    }
    media = numero / qtdNums;
    alert(`A média é: ${media.toFixed(1)}`);
}
  
// Exibe os números pares ou ímpares entre 1 e 100
  
function displayParImpar() {
var opcao = prompt("Digite 'p' para ver os números pares ou 'i' para ver os números ímpares:");
    if (opcao === 'p' || opcao === 'P') {
        var numerosPares = [];
        for (var i = 2; i <= 100; i += 2) {
        numerosPares.push(i);
        }
        alert("Os números pares até 100 são: " + numerosPares.join(", "));
    } else if (opcao === 'i' || opcao === 'I') {
        var numerosImpares = [];
        for (var i = 1; i <= 100; i += 2) {
        numerosImpares.push(i);
        }
        alert("Os números ímpares até 100 são: " + numerosImpares.join(", "));
    } else {
        alert("Opção inválida. Tente novamente!");
    }
}


// Exibe a tabuada do número fornecido pelo usuário
function displayTabuada() {
    let tabuada, result = "";
    tabuada = Number(prompt("Tabuada do número:"));
    for (let i = 1; i <= 24; i++) {
        result += `${tabuada} x ${i} = ${tabuada * i} \n`;
    }
    alert(result);
}
  
// Calculadora de dois números onde o usuário escolhe a operação desejada e retorna o resultado
function calculadora() {
    let num1, num2, operação;
    alert("Digite dois números a seguir para calcular:");
    num1 = Number(prompt("Digite um número:"));
    num2 = Number(prompt("Digite um número:"));
    switch (prompt("Escolha se deseja realizar: \n (1) adição \n (2) subtração \n (3) divisão \n (4) multiplicação \n Digite o número referente:")) {
        case "1":
        operação = num1 + num2;
        alert(`${num1} + ${num2} = ${operação}`);
        break;
        case "2":
        operação = num1 - num2;
        alert(`${num1} - ${num2} = ${operação}`);
        break;
        case "3":
        operação = num1 / num2;
        alert(`${num1} / ${num2} = ${operação.toFixed(3)}`);
        break;
        case "4":
        operação = num1 * num2;
        alert(`${num1} x ${num2} = ${operação}`);
        break;
        default:
        alert("Digite os números referentes!");
    }
}

// Verfica se o número digitado pelo usuário é ou não primo

function verificarPrimo() {
    let num = parseInt(prompt("Digite um número:"));
    let isPrimo = true;

    if (num <= 1) {
        isPrimo = false;
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
    }
    if (isPrimo) {
        alert(`${num} é um número primo!`);
    } else {
        alert(`${num} não é um número primo.`);
    }
}
  
  // Main function
  function main() {
    let option;
    do {
      option = parseInt(prompt("Escolha uma opção:\n (1) Comparar dois números\n (2) Calcular média\n (3) Exibir números pares ou ímpares\n (4) Exibir tabuada\n (5) Realizar operação matemática\n (6) Verificar número primo\n (7) Sair"));
      switch (option) {
        case 1:
          compararNumeros();
          break;
        case 2:
          calcularMedia();
          break;
        case 3:
          displayParImpar();
          break;
        case 4:
          displayTabuada();
          break;
        case 5:
          calculadora();
          break;
        case 6:
          verificarPrimo();
          break;
        case 7:
          alert("Até logo!");
          break;
        default:
          alert("Opção inválida!");
      }
    } while (option!== 7);
  }
  
  main();