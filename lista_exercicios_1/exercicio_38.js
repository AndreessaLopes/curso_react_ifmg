let numeroSecreto = 7;
let palpite = 5;
let resultado;
if (palpite < numeroSecreto) {
    resultado = "Muito baixo";
}
else if (palpite > numeroSecreto) {
    resultado = "Muito alto";
}
else {
    resultado = "Correto! Você adivinhou o número.";
}
console.log("Resultado do palpite: ", resultado);