// const { resultado } = data;

export const fetchProduct = async (busca1) => {
  if (!busca1) {
    throw new Error('ID não informado');
  }
  const url = `https://api.mercadolibre.com/items/${busca1}`;
  const response = await fetch(url);
  const data = await response.json();
  const resultado = data;
  return resultado;
};
// const text = await fetchProduct('MLB1405519561');
// console.log(text);

export const fetchProductsList = async (busca) => {
  if (!busca) {
    throw new Error('Termo de busca não informado');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
// fetchProductsList('computador');
