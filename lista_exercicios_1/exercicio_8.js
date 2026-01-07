let x2 = 10
let y2 = 20

let x1 = 30
let y1 = 40

let distancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))

console.log("Ponto 1: (", x1, ",", y1, ")")
console.log("Ponto 2: (", x2, ",", y2, ")")
console.log("A distância entre os pontos é: ", distancia.toFixed(2))