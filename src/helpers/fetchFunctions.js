export const fetchProduct = () => {
  // seu código aqui
};

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
