import { useState, useContext, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */

import { CartContext } from '../../context/CartContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Title from '../Title/Title';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart, cartQuantity, cartTotal, clearCart, removeItem } =
    useContext(CartContext);

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
      <Title title='CART' />
      <TableContainer>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow align='left'>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>SubTotal</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((p) => (
              <TableRow
                align='left'
                key={p.id}
              >
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.quantity}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.price * p.quantity}</TableCell>
                <TableCell align='right'>
                  <Button
                    key={p.id + '-cartItemButton'}
                    variant='text'
                    sx={{ boxShadow: 'none' }}
                    size='small'
                    startIcon={<ClearIcon />}
                    onClick={() => removeItem(p.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        my={1}
        container
        spacing={2}
        display='flex'
        direction='column'
        justifyContent='center'
      >
        <Grid
          item
          my={3}
          lg={12}
        >
          <Typography
            variant='h5'
            color='initial'
            align='right'
          >
            TOTAL ${cartTotal()}
          </Typography>
        </Grid>

        <Grid
          item
          lg={12}
          display='flex'
          justifyContent='right'
        >
          <Button
            variant='text'
            size='large'
            color='primary'
            sx={{ boxShadow: 'none' }}
            onClick={() => clearCart()}
            startIcon={<DeleteForeverIcon />}
          >
            Clear cart
          </Button>
          <Button
            variant='contained'
            size='large'
            color='success'
            sx={{
              boxShadow: 'none',
              marginLeft: 2,
            }}
            startIcon={<MonetizationOnIcon />}
          >
            <Link
              to='/checkout'
              className='customLink'
            >
              Check Out
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Cart;
