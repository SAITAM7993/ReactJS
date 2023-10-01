/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */

import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getProducts } from '../../api/getProducts';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
//importo url de .env para no exponer la url

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts(category)
      .then((products) => setProducts(products)) //la guardo en useState de productos "products"
      .finally(setIsLoading(false)); //luego de que obtengo los datos seteo loading en false porque ya cargó
  }, [category]);

  return (
    <>
      <Typography
        my={2}
        textAlign='left'
        variant='h2'
      >
        {category === 0 && 'All'}
        {/* si categoria = 0 entonces son todos los productos */}
      </Typography>
      <Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={3}
      >
        {isLoading ? <Loader /> : <ItemList products={products} />}
      </Grid>
    </>
  );
};
export default ItemListContainer;
