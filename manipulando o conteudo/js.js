// esse get vai pegar atacar a Tag
var p = document.getElementsByTagName('p')
    // innerHTML é o conteudo
    // console.log(p[4].innerHTML)
    // p[2].innerHTML = 'Manipulando com JS';
for (i = 0; i < p.length; i++) {
    p[i].innerHTML = 'JS é de mais - ' + i;
}