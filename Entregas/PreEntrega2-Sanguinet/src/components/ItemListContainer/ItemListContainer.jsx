/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getProducts } from '../../api/getProducts';
import ItemList from '../ItemList/ItemList';
import { getProductsByCategoryId } from '../../api/getProductsByCategoryId';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();
  /* segun lo seleccionado hago una llamada a la api para obtener una categoria o todos */
  useEffect(() => {
    //si viene una categoria filtro, si no viene o viene 0 cargo todos
    if (categoryId) {
      getProductsByCategoryId(categoryId).then((products) =>
        setProducts(products)
      );
    } else {
      getProducts().then((products) => setProducts(products));
    }
  }, [categoryId]);

  return (
    <>
      <Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={3}
      >
        <ItemList products={products} />
      </Grid>
    </>
  );
};
export default ItemListContainer;
