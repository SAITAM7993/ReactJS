import { useState, useContext, useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../context/CartContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Divider from '@mui/material/Divider';
const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart, cartQuantity, cartTotal, clearCart } = useContext(CartContext);
  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  if (cartQuantity() === 0) {
    return (
      <Box
        p={'10%'}
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant='h4'
          color='initial'
          align='center'
        >
          No items in cart
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography
        variant='h2'
        color='initial'
        align='center'
      >
        Cart
      </Typography>
      <Grid
        my={5}
        container
        spacing={1}
        display='flex'
        direction='column'
        justifyContent='center'
      >
        {cartProducts.map((p) => (
          <Grid
            item
            key={p.id}
          >
            <CartItem cartItem={p} />
            <Divider />
          </Grid>
        ))}
        <Grid
          item
          mb={5}
          lg={3}
        >
          <Typography
            variant='h6'
            color='initial'
            align='left'
          >
            Total ${cartTotal()}
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          display='flex'
          direction='column'
          justifyContent='center'
        >
          <Button
            variant='outlined'
            size='medium'
            color='primary'
            sx={{ boxShadow: 'none' }}
            onClick={() => clearCart()}
            startIcon={<DeleteForeverIcon />}
          >
            Clear cart
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          display='flex'
          direction='column'
          justifyContent='center'
        >
          <Button
            variant='contained'
            size='large'
            color='success'
            sx={{
              boxShadow: 'none',
            }}
            startIcon={<MonetizationOnIcon />}
          >
            Check out
          </Button>
        </Grid>
      </Grid>
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
