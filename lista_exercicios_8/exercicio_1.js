export default class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo.toFixed(2);

    }

    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this.#saldo -= valor;
    }
}