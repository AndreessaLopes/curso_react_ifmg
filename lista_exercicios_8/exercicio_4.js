class Produto {

    #precoBase;

    constructor(precoBase){
        // usa o setter para validar o valor inicial
        this.precoBase = precoBase;
    }

    get precoFinal() {
        const impostoFixo = 10/100;
        return this.#precoBase * (1 + impostoFixo)
    }

    set precoBase(valor) {
        if (Number.isInteger(valor) && valor > 0) {
            this.#precoBase = valor;
        } else {
            throw new Error('Preço base deve ser um inteiro positivo');
        }
    }
}