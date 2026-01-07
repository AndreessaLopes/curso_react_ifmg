const produtos = [
    {
        nome: "Teclado",
        preco: 100
    },
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Monitor",
        preco: 300
    }
].map(produto => produto.nome);

console.log(produtos);