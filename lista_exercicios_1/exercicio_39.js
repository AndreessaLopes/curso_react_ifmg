let status = 'E';
let mensagem;
switch (status) {
    case 'P':
        mensagem = 'Pedido Pendente';
        break;
    case 'E':
        mensagem = 'Pedido em Processamento';
        break;
    case 'F':
        mensagem = 'Pedido Finalizado';
        break;
    default:
        mensagem = 'Status desconhecido';
        break;
}
console.log("Status do pedido: ", mensagem);