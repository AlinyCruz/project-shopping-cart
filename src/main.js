import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
