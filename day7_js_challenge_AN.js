function properNounCorrection(str) {
    //  write code here.
    //definicion de variables
    //quita espacios al inicio y al final
    var str_t=str.trim();
    // se transforma la variable en un arreglo
    str_t=str_t.split('');
    str_ex='';
    //loop para recorrer el arreglo
    for (let index = 0; index < str_t.length; index++) {
        // asigna mayusculas a la primera posicion de el arreglo
        if(index==0){
            str_t[index]=str_t[index].toUpperCase();
        }else{
            //asigna minusculas a las demas posiciones de el arreglo
            str_t[index]=str_t[index].toLowerCase();
        }
        // concatena el arreglo para convertirlo a un string
        str_ex=`${str_ex}${str_t[index]}`;
    }
    return str_ex
}

var str = ' okjsYYYYaa ';
console.log(properNounCorrection(str));

/**
* Test Suite 
*/
describe('properNounCorrection()', () => {
    it('adds proper noun capitalization', () => {
        // arrange
        const str = 'pARiS';
        
        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe('Paris');
    });
    
     it('properly cased words are still correct', () => {
        // arrange
        const str = 'John';
        
        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe('John');
    });
});