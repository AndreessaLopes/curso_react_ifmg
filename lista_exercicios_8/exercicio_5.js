class Animal {
    #contadorDeAnimais

    constructor(nome = '') {
        this.nome = nome;
        this.#contadorDeAnimais;
    }

    getTotalAnimais() {
        return this.#contadorDeAnimais++;
    }
}