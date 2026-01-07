/* media ponderada */
let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("Nota 1:", nota1, "Peso 1:", peso1);
console.log("Nota 2:", nota2, "Peso 2:", peso2);
console.log("Nota 3:", nota3, "Peso 3:", peso3);
console.log("Média Ponderada:", mediaPonderada.toFixed(2));