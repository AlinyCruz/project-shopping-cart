import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

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
  } catch (error) {
    retiraCarregando();
    addCarregando('error');
  }
};

window.onload = () => {
  criarElementos();
};
