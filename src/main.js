import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const carrinho = document.querySelector('.cart__products');

const produtos = document.querySelector('.products'); // section dos produtos

const addCarregando = (param = 'carregando') => {
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
// addCarregando();

const retiraCarregando = () => {
  const carregando = document.querySelector('.loading');
  carregando.remove();
};
// retiraCarregando();

const criarElementos = async () => {
  addCarregando();
  try {
    const listaDeProdutos = await fetchProductsList('computador'); // traz o array do objeto do computador
    retiraCarregando();

    listaDeProdutos.forEach((item) => {
      produtos.appendChild(createProductElement(item));
    });

    document.querySelectorAll('.product__add')
      .forEach((botao) => botao
        .addEventListener('click', async (event) => {
          const alvo = event.target.parentNode.firstChild.innerHTML;
          saveCartID(alvo); // salva o id no Local Storage do produto clicado
          const produto = await fetchProduct(alvo); // retorna as informações necessarias para renderizar o elemento clicado no carrinho
          carrinho.appendChild(createCartProductElement(produto));
        }));
  } catch (error) {
    retiraCarregando();
    addCarregando('error');
  }
};

window.onload = () => {
  criarElementos();
};
