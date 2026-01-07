class Tarefa {
    #status;

    constructor(status) {
        this.#status = status;
    }

    get status() {
        return this.#status;
    }

    mudarStatus(novoStatus) {
        const statusValidos = ['pendente', 'em andamento', 'concluída'];
        if (statusValidos.includes(novoStatus)) {
            this.#status = novoStatus;
        } else {
            throw new Error('Status inválido. Status válidos são: ' + statusValidos.join(', '));
        }
    }
}