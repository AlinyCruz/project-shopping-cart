import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  //TESTE 01
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  //TESTE 02
  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada', async () => {
    // await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  //TESTE 03
  it('', () => {
    // await fetchProduct('MLB1405519561');
    expect().toHaveBeenCalled()
  });

  //TESTE 04


  //TESTE 05

});
