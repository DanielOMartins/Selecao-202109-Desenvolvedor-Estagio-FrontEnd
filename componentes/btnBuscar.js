//Evento ao clicar no botão de busca
export const adicionaBuscar = () =>{
    const menu = document.querySelector('[data-menu]');

    //Cria o input e adiciona uma classe para ele
    const inputBuscar = document.createElement('input');
    inputBuscar.classList.add('menu__buscar-input');

    //Decide quando abrir o input ou fechar
    if (menu.lastChild != document.querySelector('.menu__buscar-input')) {
        menu.appendChild(inputBuscar);
    }else{
        menu.removeChild(menu.lastChild);
    }
}