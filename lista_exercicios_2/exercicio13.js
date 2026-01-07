let somaImpares = 0;
let n6 = 1;
do {
  if (n6 % 2 !== 0) somaImpares += n6;
  n6++;
} while (n6 <= 10);
console.log("Soma dos ímpares =", somaImpares);