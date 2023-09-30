const baseUrl = import.meta.env.VITE_API_URL; //url base
const searchCategory = import.meta.env.VITE_API_SEARCH_CATEGORY; //para buscar una categoria especifica

//obtengo el producto a devolver
export const getProducts = async (category) => {
  let url = baseUrl;
  //si no es 0 (todos), busco por el id pasado
  if (category != 0) {
    url = baseUrl + searchCategory + `${category}`;
    console.log(url);
  }
  try {
    const response = await fetch(url); //obtengo del json simulando api
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
