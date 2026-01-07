const nomesComuns = ["joao", "maria", "pedro"];

const nomesFormatados = nomesComuns.map(nome => 
  nome.charAt(0).toUpperCase() + nome.slice(1)
);

const resultado = nomesFormatados.join(", ");

console.log(resultado);
