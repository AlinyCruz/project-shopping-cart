export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (busca) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!busca) {
    throw new Error('!');
  }
  return data;
};
console.log(fetchProductsList('computador'));
