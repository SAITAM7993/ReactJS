const baseUrl = 'https://api.escuelajs.co/api/v1/products/?categoryId='; //  import.meta.env.VITE_API_URL + import.meta.env.VITE_API_FILTER_CATEGORY_ID;
//url base + url cateogira

//https://api.escuelajs.co/api/v1/products/?categoryId='
export const getProductsByCategoryId = async (categoryId) => {
  let url = baseUrl + categoryId;
  try {
    const response = await fetch(url); //obtengo del json simulando api
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
