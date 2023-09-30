import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    //si la cantidad es menor a la del stock le dejo agregar
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    //si cantidad es mayor a uno le resto uno
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {/* muestro la cantidad seleccionada */}
      <Typography
        variant='h6'
        color='secondary'
        component='p'
        mx={3}
      >
        {quantity}
      </Typography>
      <Button
        variant='contained'
        size='small'
        sx={{ boxShadow: 'none' }}
        onClick={increment}
      >
        +
      </Button>

      <Button
        variant='contained'
        sx={{ boxShadow: 'none' }}
        size='small'
        onClick={decrement}
      >
        -
      </Button>

      <Button
        variant='contained'
        size='small'
        color='success'
        sx={{ boxShadow: 'none', width: '100%' }}
        onClick={() => onAdd(quantity)}
        disabled={!stock}
        startIcon={<AddShoppingCartIcon />}
      >
        Add
      </Button>
      {/* agregar al carrito, va a ejecutar como callback la funcion recibida por prop y se le pasa cmo argumento la cantidad, en caso de no tener stock lo deshabilitamos con disabled !stock  */}
    </>
  );
};
export default ItemCount;
