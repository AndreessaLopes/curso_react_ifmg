let num1 = 10;
let num2 = 5;
let operacao = "multiplicação";

switch (operacao) {
    case "soma":
        console.log("Resultado da soma: " + (num1 + num2));
        break;
    case "subtração":
        console.log("Resultado da subtração: " + (num1 - num2));
        break;
    case "multiplicação":
        console.log("Resultado da multiplicação: " + (num1 * num2));
        break;
    case "divisão":
        if (num2 !== 0) {
            console.log("Resultado da divisão: " + (num1 / num2));
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
        }
        break;
    default:
        console.log("Operação inválida. Por favor, escolha entre soma, subtração, multiplicação ou divisão.");
        break;
}