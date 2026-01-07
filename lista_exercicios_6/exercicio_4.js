let inverterString = (texto) => {
    let stringInvertida = texto.split('').reverse().join('');
    console.log(`String original: ${texto}`);
    console.log(`String invertida: ${stringInvertida}`);
}
inverterString("JavaScript");
inverterString("Funções");