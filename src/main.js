import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const produtos = document.querySelector('.products'); // section dos produtos

const addCarregando = () => {
  const criaElemento = document.createElement('h1');
  criaElemento.innerHTML = 'Carregando...';
  criaElemento.classList.add('loading');
  produtos.appendChild(criaElemento);
};
addCarregando();

const listaDeProdutos = await fetchProductsList('computador'); // traz o array do objeto do computador

const retiraCarregando = () => {
  const carregando = document.querySelector('.loading');
  carregando.remove();
};
retiraCarregando();

listaDeProdutos.forEach((item) => {
  produtos.appendChild(createProductElement(item));
});

// createProductElement(produtos); --> cria os produtos na grade
