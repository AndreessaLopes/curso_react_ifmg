
function calcularDelta( a, b, c ) {
    return ( b * b ) - 4 * a * c;
}

function calcularRaizes( a, b, delta ) {
    const raiz1 = ( -b + Math.sqrt( delta ) ) / ( 2 * a );
    const raiz2 = ( -b - Math.sqrt( delta ) ) / ( 2 * a );
    return [ raiz1, raiz2 ];
}

function bhaskara( a, b, c ) {
    const delta = calcularDelta( a, b, c );
    if ( delta < 0 ) {
        return null; // Não há raízes reais
    }
    return calcularRaizes( a, b, delta );
}

// Fazendo uso 
const a = 5;
const b = 4;
const c = 3;
const raizes = bhaskara( a, b, c );

if ( raizes ) {
    console.log("Valor de a = " ,a , ", b = ", b, ", e c =", c)
    console.log( `As raízes são: ${ raizes[0] } e ${ raizes[1] }` );
} else {
    console.log("Valor de a = " ,a , ", b = ", b, ", e c =", c)
    console.log( 'Não há raízes reais.' );
}