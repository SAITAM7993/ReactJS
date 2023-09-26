import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@mui/material/Grid';

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json()) //obtengo la respuesta de la api
      .then((products) => setProducts(products)); //la guardo en useState de productos "products"
  }, []);

  return (
    <>
      <Typography
        my={2}
        textAlign='left'
        variant='h2'
      >
        {category}
      </Typography>
      <Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={5}
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
