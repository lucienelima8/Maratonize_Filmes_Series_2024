/*Seção Atores: JS pra aparecer o nome do ator ao clicar no botão*/


/*Variável pra armazenar o botão clicável*/
let nome_ator = document.getElementById('btn_nome_atores');

var texto = '';

/*Função do botão no html: onclick mostrar_nome */
function mostrar_nome() {
    
    var paragrafos = document.getElementsByClassName("click_nome");

    /*for para pegar todos os índices das classes*/
    for (var i = 0; i < paragrafos.length; i++) {

       texto += paragrafos [i].style.display = 'block';
        
    }
    
}

