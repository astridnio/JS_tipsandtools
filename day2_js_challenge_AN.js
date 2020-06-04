function addTwoDigits(num)  {
    //  write code here.
    // Autor Astrid Niño 
    // GIT Profile https://github.com/astridnio
    //se define la expresion regular con parentesis para retornar un arreglo de resultados encontrados
    var div="";
    //se parsea el numero a string
    var num_rec=num.toString();
    // se hace el split del string obtenido anteriormente en un arreglo por digito. 
    var division = num_rec.split(div);
    //defino la variable para retornar luego del for que recorre el array
    var sum=0;
    //for para recorrer el arreglo creado por el split
    for (let index = 0; index < num_rec.length; index++) {
        //se excluyen las posiciones vacias del array
        if (num_rec[index] != "")
        {
            //se suman los digitos del arreglo
            sum=sum+parseInt(num_rec[index],10);
        }
    }
    //retorno la suma
    return sum;

}


/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});