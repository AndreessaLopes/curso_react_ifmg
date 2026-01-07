let contarVogais = (palavra) => {
    let vogais = "aeiouAEIOU";
    let contador = 0;

    for (let char of palavra) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    console.log(`A palavra "${palavra}" tem ${contador} vogais.`);
}

contarVogais("Andressa");
contarVogais("Daniel");
