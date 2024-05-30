/*JS pra imagem de cada ator na seção atores*/

//Selecionando a imagem e parágrafo onde o nome será exibido
//const imagem = document.getElementsByClassName('img_ator');
//const nomeImagemParagrafo = document.getElementById('click_nome');

//Adicionando o evento
//imagem.addEventListener('click', function aparecer_nome() {
    //const nomeImagem = imagem.alt;

    //Exibindo o nome do autor no parágrafo
    //nomeImagemParagrafo.textContent = nomeImagem;
    //nomeImagemParagrafo.style.display = 'block';

//});



//document.getElementsByClassName('img_ator').addEventListener('click', function aparecer_nome() {
    //var alt = this.getAttibute('alt');
    //var paragrafo = document.getElementById('click_nome');

    //paragrafo.innerHTML = '<p>' + alt + '</p>';

//});


function aparecer_nome() {
    var alt = document.getElementsByClassName('img_ator').getAttribute('alt');
    var paragrafo = document.getElementById('click_nome');

    paragrafo.innerHTML = '<p>' + alt + '</p>';

}


