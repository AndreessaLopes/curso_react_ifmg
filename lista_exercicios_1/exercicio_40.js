let valorTotal = 1000; // Valor total da compra
let numeroParcelas = 4;
let valorParcela;
let valorFinal;
let juros = 0;
if (numeroParcelas === 1) {
    valorFinal = valorTotal;
    valorParcela = valorFinal;
}
else if (numeroParcelas === 2) {
    valorFinal = valorTotal;
    valorParcela = valorFinal / numeroParcelas;
}
else if (numeroParcelas === 3) {
    juros = 0.05;
    valorFinal = valorTotal * (1 + juros);
    valorParcela = valorFinal / numeroParcelas;
}
else if (numeroParcelas >= 4) {
    juros = 0.10;
    valorFinal = valorTotal * (1 + juros);
    valorParcela = valorFinal / numeroParcelas;
}
console.log(`Número de parcelas: ${numeroParcelas}`);
console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);
console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
