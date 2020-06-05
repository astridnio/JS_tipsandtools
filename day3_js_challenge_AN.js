function firstDuplicate(nums) {
    //  write code here.
//definicion de variables
var count = {};
var pos=0;
//for para recorrer el arreglo de entrada 
for(var i = 0; i < nums.length; i++){
if(!(nums[i] in count))
//inicializa la propiedad nums[i] en el objeto count si no se realiza la propiedad queda como nan
count[nums[i]] = 0;
//suma 1 posicion a la propiedad nums[i] de el objeto count
count[nums[i]]++;
//valida si la propiedad nums[i] del objeto count no es mayor a 1 ocurrencia
if(count[nums[i]]++>1){
    //retorna el primer objeto que tiene mas de 1 aparicion.
    return nums[i]
    break;
}
}
//retorna -1 ya que no hay repetidos en el arreglo. 
return -1;
}

/**
* Test Suite 
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });
    
    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(-1);
    });
});