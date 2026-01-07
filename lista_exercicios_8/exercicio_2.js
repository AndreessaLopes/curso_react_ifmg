class Pessoa{

    #nome;
    #sobrenome;

    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.#nome} ${this.#sobrenome}`
    }

    set nomeCompleto(nomeCompleto){
    const partes = nomeCompleto.trim().split(" ");
        if(partes.length < 2) {
            throw new Error("Nome completo deve conter nome e sobrenome.")
        }
        const nome = partes[0];
        const sobrenome = partes.slice(1).join(" ");
    }

    static criarPessoaComNomeCompleto(){
        return new Pessoa(nome, sobrenome);
    }
}