let valorRandom;
do {
  valorRandom = Math.random();
  console.log(valorRandom);
} while (valorRandom >= 0.1);
console.log("Parou pois o valor foi < 0.1");