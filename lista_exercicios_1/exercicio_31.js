let valorCompra = 120;
let desconto = 0;
if (valorCompra > 100) {
    desconto = 0.10;
} else if (valorCompra >= 50) {
    desconto = 0.05;
}
let valorComDesconto = valorCompra - (valorCompra * desconto);
console.log("Valor original da compra: R$" + valorCompra.toFixed(2));
console.log("Desconto aplicado: " + (desconto * 100) + "%");
console.log("Valor final da compra com desconto: R$" + valorComDesconto.toFixed(2));
