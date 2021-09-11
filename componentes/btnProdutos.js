const listaProd = [];
listaProd.push(document.querySelector('[data-prod-um'));
listaProd.push(document.querySelector('[data-prod-dois'));
listaProd.push(document.querySelector('[data-prod-tres'));
listaProd.push(document.querySelector('[data-prod-quatro'));

//Evento ao clicar para voltar
export const proxProd = () =>{
    const itens = document.querySelector('[data-prod-itens]');
    
    //Remove produto do inicio e coloca no final 
    var temp = listaProd.shift();
    listaProd.push(temp);

    //Remove todos os filhos de itens até não ter mais nenhum 
    while (itens.firstChild) {
        itens.removeChild(itens.lastChild);
    }

    //Adiciona os itens de volta na ordem correta
    for (let i = 0; i < listaProd.length; i++) {
        itens.appendChild(listaProd[i]);
    }
}

//Evento ao clicar para o proximo
export const voltarProd = () =>{
    const itens = document.querySelector('[data-prod-itens]');
    
    //Remove produto do final e coloca no inicio
    var temp = listaProd.pop();
    listaProd.unshift(temp);

    //Remove todos os filhos de itens até não ter mais nenhum
    while (itens.firstChild) {
        itens.removeChild(itens.lastChild);
    }

    //Adiciona os itens de volta na ordem correta
    for (let i = 0; i < listaProd.length; i++) {
        itens.appendChild(listaProd[i]);
    }
}