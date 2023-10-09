const baseUrl = 'https://api.escuelajs.co/api/v1/products'; //import.meta.env.VITE_API_URL;

//url base
export const getProductById = async (productId) => {
  let url = baseUrl + '/' + productId;
  try {
    const response = await fetch(url); //obtengo del json simulando api
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};
