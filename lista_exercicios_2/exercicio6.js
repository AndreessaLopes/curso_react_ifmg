let x = 456, somaDigitos = 0;
while (x > 0) {
  somaDigitos += x % 10;
  x = Math.floor(x / 10);
}
console.log("Soma dos dígitos =", somaDigitos);