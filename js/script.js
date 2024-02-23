const divListaFilmes = document.querySelector('#listaFilmes');
const btn1 = document.querySelector('button');

// Criando o item lista
const itemLista = document.createElement('li');
const inputTexto = document.querySelector('#filmeInput');

btn1.addEventListener('click', () =>{
    window.alert('Filme adicionado! :)');

    //adicionando o filme na nossa lista
    divListaFilmes.append(itemLista);

    //adicionar texto ao elemento
    //itemLista.innerHTML = "<strong> Réri Pote e a Pedra de Crack</strong>"

    //adicionar texto dinamico ao elemento
    itemLista.innerHTML = inputTexto.value 
})
