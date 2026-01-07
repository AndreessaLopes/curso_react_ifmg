const usuarios = [
    {
        id: 1,
        nome: "Ana"
    },
    {
        id: 2,
        nome: "Bruno"
    }
].find(usuario => usuario.id === 2)

console.log(usuarios)