let carrinho = [10, 25, 5, 15, 30]

let valor = carrinho.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(valor)