/* Este componente llama a la api para obtener la lista de productos, llama a ProductCard y los lista en una grilla */

import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@mui/material/Grid';
import { getProducts } from '../../api/getProducts';
//importo url de .env para no exponer la url

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category).then((products) => setProducts(products)); //la guardo en useState de productos "products"
  }, [category]);
  /*
  if (parseInt(category) != 0) {
    url += `/?categoryId=${category}`;
  }
  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) //obtengo la respuesta de la api
      .then((products) => setProducts(products)); //la guardo en useState de productos "products"
  }, []);
  */

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
        {products.map((product) => {
          return (
            <Grid
              item
              container
              direction='column'
              display='flex'
              justify='center'
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default ItemListContainer;
