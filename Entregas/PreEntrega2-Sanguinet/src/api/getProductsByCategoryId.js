const baseUrl =
  import.meta.env.VITE_API_URL + import.meta.env.VITE_API_FILTER_CATEGORY_ID;
//url base + url cateogira
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
