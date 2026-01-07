let a = 0, b = 1;
while (a <= 50) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}