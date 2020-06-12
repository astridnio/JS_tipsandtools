function evenDigitsOnly(number) {
    //  write code here.
    //definicion de variables
    var nums_in=number.toString(); 
    nums_in=nums_in.split('')
    var resultado 
    // funcion para filtrar los numeros paresdel arreglo
    resultado = nums_in.filter( x =>{
        return x%2 == 0 ; 
    })
    // se valida si el largo de el arreglo con solo numeros pares es igual al largo del arreglo recibido
    if (resultado.length == nums_in.length)
    return true;
    return false; 
}

/**
* Test Suite 
*/
describe('evenDigitsOnly()', () => {
    it('returns true when all digits are even', () => {
        // arrange
        const nums = 248622;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 1 : ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns fale when any digits are odd', () => {
        // arrange
        const nums = 642386;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 2 : ", result);
        
        // assert
        expect(result).toBe(false);
    });
});
