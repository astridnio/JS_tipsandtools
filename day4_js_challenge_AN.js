function sumAllPrimes(num) {
    //  write code here.
    //definicion de variables
    var num_in = 0;
    var sum = 0;
    //loop para recorrer la secuencia de numeros desde el 2 al num enviado a la la funcion
    for (let index = 2; index < num + 1; index++) {
        num_in = index
        //loop para determinar si el numero es primo
        for (let index_2 = 2; index_2 < num_in + 1; index_2++) {
            //valida que el numero se divida por otro mayor a 1 y diferente de si mismo
            if ((num_in > 2) && (index_2 != num_in)) {
                // se define el residuo de la division
                var mod = index % index_2
                //si el residuo es igual a 0
                if (mod==0){
                    //asigna 0 al numero a sumar y sale de el ciclo de validación de numeros primos
                    num_in=0;
                    break;
                }
            }
        }
        //suma solo los numeros primos
        sum = num_in + sum;
    }
    return sum;

}


/**
* Test Suite
*/
describe('sumAllPrimes()', () => {
    it('adds all prime numbers up to input number', () => {
        // arrange
        const num = 10;

        // act
        const result = sumAllPrimes(num);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(17);
    })
});