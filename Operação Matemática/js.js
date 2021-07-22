window.onload = function() {
    /*
       Ordem de Precedencia
        1º ()    -> qm estiver dentro
        2º ** 
        3º * / % -> qm aparecer primeiro
        4º + -   -> qm aparecer primeiro
    */
    var numb = 1 + 3;
    var numb2 = 3 * 2;
    var numb3 = 3 / 3;
    var numb4 = 3 ** 2;
    console.log(numb, numb2, numb3, numb4);
}