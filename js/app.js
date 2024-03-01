const listaFilmes = document.querySelector("#listaFilmes")

// let pq posso adicionar coisas depois
let filmes = [{
    nome: 'Serviços de Entrega da Bruxinha Kiki',
    lancamento: 2000,
    rating: 7
}, {
    nome: 'A Viagem de Chihiro',
    lancamento: 2005,
    rating: 10
}, {
    nome: 'Princesa Mononoke',
    lancamento: 2003,
    rating: 8
}, {
    nome: 'Totoro',
    lancamento: 2003,
    rating: 7
}, {
    nome: 'Ponyo',
    lancamento: 2003,
    rating: 6
}]

// filmes.push('O Castelo Animado') - Adiciona um item no fim da lista
// filmes.pop() - remove o ultimo item da lista

// quando a tela carregar, faça (funcao) -- utilizando arrow function
window.onload = () => {
    //for é composto por tres partes
    // no let comeca com o index 0, depois, enquanto i for menor que o tamanho
    // da minha lista, faça oq manda a função e depois adicione +1 para o loop
    for(let i=0; i < filmes.length; i++){
        let listaItem = document.createElement('li')
        listaFilmes.append(listaItem)
        // para adicionar um item, utilizamos o inner.HTML ou inner.Text
        listaItem.innerHTML = filmes[i].nome

        let ratingItem = document.createElement('li')
        listaFilmes.append(ratingItem)
        ratingItem.innerHTML = filmes[i].rating
    }
}

