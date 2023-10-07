const url = import.meta.env.VITE_API_URL; //url base
//obtengo el producto a devolver
export const getProducts = async () => {
  try {
    const response = await fetch(url); //obtengo del json simulando api
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
