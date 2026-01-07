class Usuario {

    #idade;

    constructor(idade) {
        this.#idade = idade;
    }

    get idade() {
        return this.#idade;
    }

    set idade(valor) {
        if (Number.isInteger(valor) && valor >= 18) {
            console.log(`Idade: ${valor}. Válido, maior de 18 anos`)
        } else {
            throw new Error(`Idade: ${valor}. Inválido, menor de 18 anos`)
        }
    }
}