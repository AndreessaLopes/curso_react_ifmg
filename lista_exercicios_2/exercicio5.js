let pot = 0;
let valor = 1;
while (valor <= 1000) {
  console.log(`2^${pot} = ${valor}`);
  pot++;
  valor *= 2;
}