let verificarPalindromo = (palavra) => {
    let invertido = palavra.split('').reverse().join('');
    if(palavra === invertido) {
        console.log(`A palavra "${palavra}" é um palíndromo.`);
    }
    else {
        console.log(`A palavra "${palavra}" não é um palíndromo.`);
    }
}

verificarPalindromo("arara");
verificarPalindromo("casa");
verificarPalindromo("resistencia")