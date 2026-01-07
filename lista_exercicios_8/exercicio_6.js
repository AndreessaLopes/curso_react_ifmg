class Ponto {
    #x;
    #y;

    constructor(x, y) {

        this.#x = Number(x);
        this.#y = Number(y);
    }

    get ponto() {
        return { x: this.#x, y: this.#y };
    }

    set ponto({ x, y }) {
        const nx = Number(x);
        const ny = Number(y);
        if (Number.isFinite(nx) && Number.isFinite(ny)) {
            this.#x = nx;
            this.#y = ny;
        } else {
            throw new Error(`Valor x: ${x} ou y: ${y} inválido`);
        }
    }
}
