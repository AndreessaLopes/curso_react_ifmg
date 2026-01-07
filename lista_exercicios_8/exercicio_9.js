import Pessoa from './exercicio_2.js'

console.log("=== Início dos testes da classe Pessoa ===\n");

// Teste 1: Criar pessoa com nome completo simples
try {
    const pessoa1 = Pessoa.criarPessoaComNomeCompleto("João Silva");
    console.log("✓ Teste 1 (nome simples):");
    console.log(`  Nome completo: ${pessoa1.nomeCompleto}\n`);
} catch (err) {
    console.log(`✗ Teste 1 falhou: ${err.message}\n`);
}

// Teste 2: Criar pessoa com nome completo composto
try {
    const pessoa2 = Pessoa.criarPessoaComNomeCompleto("Maria Santos Oliveira");
    console.log("✓ Teste 2 (nome composto):");
    console.log(`  Nome completo: ${pessoa2.nomeCompleto}\n`);
} catch (err) {
    console.log(`✗ Teste 2 falhou: ${err.message}\n`);
}

// Teste 3: Erro ao passar apenas um nome
try {
    const pessoa3 = Pessoa.criarPessoaComNomeCompleto("João");
    console.log("✗ Teste 3 deveria ter lançado erro\n");
} catch (err) {
    console.log("✓ Teste 3 (erro esperado):");
    console.log(`  Erro capturado: ${err.message}\n`);
}

// Teste 4: Comparar com construtor tradicional
try {
    const pessoa4a = new Pessoa("Carlos", "Mendes");
    const pessoa4b = Pessoa.criarPessoaComNomeCompleto("Carlos Mendes");
    console.log("✓ Teste 4 (comparação com construtor):");
    console.log(`  Construtor tradicional: ${pessoa4a.nomeCompleto}`);
    console.log(`  Método estático: ${pessoa4b.nomeCompleto}`);
    console.log(`  São iguais: ${pessoa4a.nomeCompleto === pessoa4b.nomeCompleto}\n`);
} catch (err) {
    console.log(`✗ Teste 4 falhou: ${err.message}\n`);
}

// Teste 5: Modificar nome via setter após criação
try {
    const pessoa5 = Pessoa.criarPessoaComNomeCompleto("Ana Costa");
    console.log("✓ Teste 5 (modificar via setter):");
    console.log(`  Nome inicial: ${pessoa5.nomeCompleto}`);
    pessoa5.nomeCompleto = "Ana Paula Costa Silva";
    console.log(`  Nome alterado: ${pessoa5.nomeCompleto}\n`);
} catch (err) {
    console.log(`✗ Teste 5 falhou: ${err.message}\n`);
}

console.log("=== Testes concluídos ===");
