let salarioBruto = 3000;
let descINSS = salarioBruto * 0.11;
let descIR = salarioBruto * 0.075;

let salarioLiquido = salarioBruto - descINSS - descIR;
console.log("Salário bruto: R$ " + salarioBruto);
console.log("Desconto INSS: R$ " + descINSS.toFixed(2));
console.log("Desconto IR: R$ " + descIR.toFixed(2));
console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));