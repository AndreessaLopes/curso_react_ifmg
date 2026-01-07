let distancia = 250;
let precoPorKm;
let precoTotal;
if (distancia <= 200) {
    precoPorKm = 0.50;
} else {
    precoPorKm = 0.45;
}
precoTotal = distancia * precoPorKm;
console.log("Preço total da passagem: R$", precoTotal);
