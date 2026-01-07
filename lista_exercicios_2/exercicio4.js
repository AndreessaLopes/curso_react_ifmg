let numero = 12345;
let invertido = 0;
while (numero > 0) {
  invertido = invertido * 10 + (numero % 10);
  numero = Math.floor(numero / 10);
}
console.log("Invertido =", invertido);