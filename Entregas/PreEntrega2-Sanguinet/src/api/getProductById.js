const baseUrl = import.meta.env.VITE_API_URL; //url base

//obtengo el producto a devolver
export const getProductById = async (id) => {
  let url = baseUrl + `/${id}`;
  try {
    const response = await fetch(url); //obtengo del json simulando api
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};
