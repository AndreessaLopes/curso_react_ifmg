let n3 = 21;
do {
  if (n3 % 3 === 0 && n3 % 5 === 0) break;
  n3++;
} while (true);
console.log("Primeiro divisível por 3 e 5:", n3);