function addBorder(array) {
    //  write code here.
    // Autor Astrid Niño 
    // GIT Profile https://github.com/astridnio
    // defiinicion de variables
  var array2=array; 
  element_a=[];
  num_of_ast_top=0;
  num_of_ast_bot=0;
  top="";
  bot="";
  //for para recorrer el arreglo
    for (let index = 0; index < array2.length; index++) {
      element = array[index];
      //valida la primera posicion del arreglo
      if (index==0){
          //cuenta el numero de caracteres de la primera posicion del arreglo
      num_of_ast_top=element.length+2;}
        //valida la ultima posicion del arreglo
      if (index==(array2.length -1)){
          //cuenta el numero de caracteres de la ultima posicion del arreglo
      num_of_ast_bot=element.length+2;}
      //agrega * al inicio y al fin de la posicion del arreglo
      element_a[index]=`*${element}*`;
    }
    //genera un top con la misma cantidad de caracteres del primer string del arreglo
    for (var i = 0; i < num_of_ast_top; i++) {
        var top=`*${top}`; 
    }
    //genera un top con la misma cantidad de caracteres del ultimo string del arreglo
    for (var i = 0; i < num_of_ast_top; i++) {
        var bot=`*${bot}`; 
    }
    //agrego el top y el bot al arreglo final
    element_a.push(bot);
    element_a.unshift(top);
    //retorno el arreglo con margenes
     return element_a;
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});