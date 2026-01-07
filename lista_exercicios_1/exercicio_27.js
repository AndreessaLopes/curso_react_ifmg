let a = 5;
let b = 5;
let c = 5;
if (a == b && b == c) {
    console.log("Equilátero")
}
else if (a == b || b == c || a == c) {
    console.log("Isósceles")
}
else {
    console.log("Escaleno")
}