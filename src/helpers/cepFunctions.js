const inputDigCep = document.querySelector('.cep-input');
const divEnd = document.querySelector('.cart__address');

export const searchCep = async (busca) => {
  const url1 = `https://cep.awesomeapi.com.br/json/${busca}`;
  const url2 = `https://brasilapi.com.br/api/cep/v2/${busca}`;

  try {
    const apis = await Promise.any([fetch(url1), fetch(url2)]);
    const data = await apis.json();
    const resultado = data;
    console.log(resultado);
  } catch (error) {
    divEnd.innerHTML = 'CEP não encontrado';
  }
};

export const getAddress = async () => {
  const digitaCep = inputDigCep.value;
  const cepApi = await searchCep(digitaCep);
  // const { address, district, city, state, neighborhood, street } = cepApi;
  const enderecoCompleto = `${cepApi.address || cepApi.street} - ${cepApi.district
    || cepApi.neighborhood} - ${cepApi.city} - ${cepApi.state}`;
  divEnd.innerHTML = enderecoCompleto;

  if (cepApi.status) {
    divEnd.innerHTML = 'CEP não encontrado';
  }
};
