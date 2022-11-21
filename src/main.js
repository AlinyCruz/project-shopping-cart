import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// captura a ol carrinho de compra
const carrinho = document.querySelector('.cart__products');

// captura section dos produtos
const produtos = document.querySelector('.products');

// função que add o carregando na pagina
const addCarregando = (param = 'carregando') => { // caso não exista paramentro, usar 'carregando'
  const criaElemento = document.createElement('h1');
  if (param === 'error') {
    criaElemento.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    criaElemento.classList.add('error');
  } else {
    criaElemento.innerHTML = 'Carregando...';
    criaElemento.classList.add('loading');
  }
  produtos.appendChild(criaElemento);
};

// função que retira o carregando da pagina
const retiraCarregando = () => {
  const carregando = document.querySelector('.loading');
  carregando.remove();
};

// função assincrona que faz grade dos produtos carregar na pagina
const criarElementos = async () => {
  addCarregando();

  try {
    // traz o array do objeto do computador
    const listaDeProdutos = await fetchProductsList('computador');

    retiraCarregando();

    // add cada produto na sua section
    listaDeProdutos.forEach((item) => {
      produtos.appendChild(createProductElement(item));
    });

    // captuta os botões add carrinho, add evento de click em cada um e coloca no carrinho o que for clicado
    document.querySelectorAll('.product__add')
      .forEach((botao) => botao
        .addEventListener('click', async (event) => {
          const alvo = event.target.parentNode.firstChild.innerHTML; // captura apenas o texto do id clicado
          saveCartID(alvo); // salva o id no Local Storage do produto clicado
          const produto = await fetchProduct(alvo); // retorna as informações necessarias para renderizar o elemento clicado no carrinho
          carrinho.appendChild(createCartProductElement(produto));
        }));
  } catch (error) {
    retiraCarregando();
    addCarregando('error');
  }
};

const carregaPagina = () => {
  const carrinhoCarregado = getSavedCartIDs(); // traz os ID's dos produtos salvos no local Storage
  carrinhoCarregado.map(async (elemento) => {
    const elementoId = await fetchProduct(elemento);
    carrinho.appendChild(createCartProductElement(elementoId));
  });
};
// console.log(carregaPagina());

// ao carregar a pagina executa a função criarElementos
window.onload = () => {
  criarElementos();
  carregaPagina();
};
