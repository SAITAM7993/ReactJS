import { useState, useContext, useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../context/CartContext';
import Grid from '@mui/material/Grid';
// import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const { cart, cartQuantity, cartTotal, clearCart } = useContext(CartContext);

  console.log(cart);

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  /* segun lo seleccionado hago una llamada a la api para obtener una categoria o todos */
  console.log(cartProducts);

  if (cartQuantity() === 0) {
    return (
      <div>
        <h1>NO hay items</h1>
      </div>
    );
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        display='flex'
        direction='column'
        justifyContent='center'
      >
        {cartProducts.map((p) => (
          <Grid
            item
            lg={12}
            key={p.id}
          >
            <CartItem cartItem={p} />
          </Grid>
        ))}
      </Grid>
      {/* 
      // esto anda
      {cartProducts.map((product) => (
        <div key={`prod-${product.id}`}>
          {product.title}-{product.price}-{product.quantity}
          total: {cartQuantity()}-{cartTotal()}
        </div>
      ))} */}
    </>
  );
};
export default Cart;

{
  /* esto rompe ...
<Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={3}
      >
      
        {cartProducts.map((p) => (
          <Grid
            item
            direction='column'
            display='flex'
            justify='center'
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={p.id}
          >
            <CartItem {...cartProducts} />
          </Grid>
        ))}
        <Grid
          item
          direction='column'
          display='flex'
          justify='center'
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          {
            <Button
              variant='text'
              color='default'
              onClick={() => clearCart()}
              className='Button'
            >
              Clear cart
            </Button>
          }
          {
            <Link to='chekout'>
              <Button
                variant='text'
                color='default'
              >
                Checkout
              </Button>
            </Link>
          }
        </Grid>
      </Grid> */
}
