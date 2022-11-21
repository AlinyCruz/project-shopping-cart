const inputDigCep = document.querySelector('.cep-input');
const divEnd = document.querySelector('.cart__address');

export const getAddress = async (busca) => {
  const url1 = `https://cep.awesomeapi.com.br/json/${busca}`;
  const url2 = `https://brasilapi.com.br/api/cep/v2/${busca}`;

  try{
    const apis = await Promise.any([fetch(url1), fetch(url2)]);
    const data = await apis.json();
    const resultado = data;
    return resultado;
  } catch (error) {
    divEnd.innerHTML = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const digitaCep = inputDigCep.value;
  const cepApi = await getAddress(digitaCep);
  const { address, district, city, state, neighborhood, street } = cepApi;
  const enderecoCompleto = `${address || street} - ${district
    || neighborhood} - ${city} - ${state}`;
  divEnd.innerHTML = enderecoCompleto;
  if (enderecoCompleto.includes('undefined')) {
    divEnd.innerHTML = 'CEP não encontrado';
  }
};
