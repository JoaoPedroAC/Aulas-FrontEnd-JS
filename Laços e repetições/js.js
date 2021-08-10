window.onload = function() {
    /* 
        1 º !(negação ou not)
        2 º && (conjunção ou and)
        3 º || (disjunção ou or)
     */
    var rep = 0;
    var nome = 'John';
    // precisamos de uma variavel antes
    /*while (rep <= 10) {
        console.log('Olá numero ' + rep);
        rep++;
    }

    console.log('Acaboooooo!!!!!') * /

    /* for (var n = 0; n < 10; n++) {
        console.log('ola ' + n);
    }*/
    /*  do {
        console.log('Olá');
    } while (nome == 'gustavo') {
        console.log('Mentira');
    }*/
    function laco2(n) {
        for (i = 0; i < 10; i++) {
            n++;
            /* if (n == 3) {
                 // continue; //vai pular o numero 3, mas vai continuar o loop
             };
             if (n == 9) {
                 // break; //vai parar antes do 9, mas dependendo da posição do .log pode parar no nove tbm
             }*/
            console.log(n);
        };
    };
    laco2(0);
};