let capital = 1000;
let taxaJuros = 0.05;
let tempo = 3;

let montante = capital * Math.pow((1 + taxaJuros), tempo);

console.log("Capital inicial: R$ " + capital);
console.log("Taxa de juros anual: " + (taxaJuros * 100) + "%");
console.log("Tempo (anos): " + tempo);
console.log("O montante acumulado após " + tempo + " anos é: R$ " + montante.toFixed(2));