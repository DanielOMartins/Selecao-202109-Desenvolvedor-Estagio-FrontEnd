import { mudarBanner } from "./componentes/btnBanner.js";
import { voltarProd } from "./componentes/btnProdutos.js";
import { proxProd } from "./componentes/btnProdutos.js";
import { adicionaBuscar } from "./componentes/btnBuscar.js";

//Botão buscar no menu
const buscarBtn = document.querySelector('[data-btn-buscar]');
buscarBtn.addEventListener('click', adicionaBuscar);

//Botões do slider banner
const voltarBtnBanner = document.querySelector('[data-banner-ant]');
voltarBtnBanner.addEventListener('click', mudarBanner);

const proxBtnBanner = document.querySelector('[data-banner-prox]');
proxBtnBanner.addEventListener('click', mudarBanner);

//Botões do slider produtos
const voltarBtnProd = document.querySelector('[data-prod-ant]');
voltarBtnProd.addEventListener('click', voltarProd);

const proxBtnProd = document.querySelector('[data-prod-prox]');
proxBtnProd.addEventListener('click', proxProd);