const baseUrl = import.meta.env.VITE_API_URL;
//url base + url cateogira
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
