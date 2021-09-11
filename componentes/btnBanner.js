var count = 0;

//Evento ao clicar para mudar imagem do banner
export const mudarBanner = () =>{
    const img = document.querySelector('[data-banner]');

    //Confere para qual imagem deve trocar
    count++;
    if (count == 1) {
        img.style.backgroundImage = "url('./assets/img/banner/banner2.png')";
    }else{
        img.style.backgroundImage = "url('./assets/img/banner/banner1.png')";
        count = 0;
    }
}