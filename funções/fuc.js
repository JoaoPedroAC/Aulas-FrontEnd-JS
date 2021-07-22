// Funções nativas do  proprio JS e criar os nossos function
window.onload = function() {
    // dentro do (são variaveis da função e fora é o valor atribuido) naõ é obrigatório ter parametro, pode ficar vazio ()
    // caso tenha um return dentro se ele for antes de algum código ele não executara o codigo restante
    /* 
     function tabuada(x, y) {
        var nome = 'João';
        return nome;
        while (x <= 10 && y <= 10) {
            console.log(x + ' X ' + y + ' = ' + x * y);
            x++;
            y++;

        }
    }
    // tabuada(0, 0);
    var sei = tabuada(0, 0);
    console.log();
    */

    /*
     var obj = {
            'nome': 'João',
            'idade': 21,
            'func': function() {
                console.log('Vitor')
            }
        };
        console.log(obj.nome)
        
        var obj2 = {}
        obj2.func = function() {
            console.log('Lindo')
        }
        obj2.func()
    */
    // dentro do array temos objeto
    var variavel = [];
    variavel.obj = {};
    variavel.obj.nome = 'John';
    console.log(variavel.obj.nome)
}