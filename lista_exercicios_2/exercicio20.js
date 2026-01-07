let palavra = "programacao";
let vogais = "aeiou";
let contVogais = 0;
for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i])) contVogais++;
}
console.log("Vogais =", contVogais);