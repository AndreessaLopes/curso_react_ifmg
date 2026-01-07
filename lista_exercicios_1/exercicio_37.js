let char = 'a';
let resultado;

if (char.length === 1) {
    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        if ('aeiouAEIOU'.includes(char)) {
            resultado = 'Vogal';
        }
        else {
            resultado = 'Consoante';
        }
    }
    else if (char >= '0' && char <= '9') {
        resultado = 'Número';
    }
    else {
        resultado = 'Caractere especial';
    }
}
else {
    resultado = 'Por favor, insira apenas um caractere.';
}
console.log("Resultado: ", resultado);