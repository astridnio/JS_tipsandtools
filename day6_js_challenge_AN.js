function makeArrayConsecutive(nums) {
    //  write code here.
    // definicion de variables
    var numbers = nums
    //funcion para ordenar los numeros del arreglo de menor a mayor (a-b)
    numbers.sort(function (a, b) {
        return a - b;
    });
    // asigna el minimo
    var min = numbers[0];
    //asigna el maximo
    var max = numbers[numbers.length - 1];
    var sum = 0;
    var j = 0;
    //loop para definir la secuencia de numeros de 1 en 1 del minimo al maximo
    for (index = min; index < max + 1; index++) {
        //validacion para que recorra solo las posiciones existentes en el arreglo
        if (j < numbers.length + 1) {
            //valida si el valor de la secuencia existe en el arreglo recibido
            if (index != numbers[j])
            //suma 1 si el valor no existe en el arreglo
                sum++;
            // suma 1 a la secuencia que recorre el arreglo
            j++;
        }
    }
    return sum
}

/**
* Test Suite
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [6, 2, 3, 8];

        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(3);
    })
});