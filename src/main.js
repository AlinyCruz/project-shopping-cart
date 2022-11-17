import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const produtos = document.querySelector('.products'); // section dos produtos

const listaDeProdutos = await fetchProductsList('computador'); // traz o array do objeto do computador

// createProductElement(produtos); --> cria os produtos na grade

listaDeProdutos.forEach((item) => {
  produtos.appendChild(createProductElement(item));
});
