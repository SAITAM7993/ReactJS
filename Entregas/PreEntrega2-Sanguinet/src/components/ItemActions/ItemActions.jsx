import { useState } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const ItemActions = ({ id, stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  //para manejar el modal de detalle de producto
  const [showItemDetail, setShowItemDetail] = useState(false);
  function showItemDetailHandler() {
    setShowItemDetail(!showItemDetail);
  }

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

      <Stack
        direction='row'
        useFlexGap
        flexWrap='wrap'
        alignItems='center'
        spacing={{ xs: 1, xl: 2 }}
      >
        <Button
          className='actionButton'
          variant='contained'
          size='small'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={increment}
        >
          +
        </Button>
        <Typography
          variant='h6'
          color='secondary'
          component='p'
          mx={1}
        >
          {quantity}
        </Typography>
        <Button
          variant='contained'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          size='small'
          onClick={decrement}
        >
          -
        </Button>
        <Button
          variant='contained'
          size='small'
          color='success'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          startIcon={<InfoIcon />}
          onClick={showItemDetailHandler}
        >
          {showItemDetail ? (
            <ItemDetailContainer
              id={id}
              open={showItemDetail}
            />
          ) : null}
          {/* con esto abriria el detalle del producto seleccionado */}
        </Button>
        <Button
          variant='contained'
          size='small'
          color='success'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
      </Stack>

      {/* agregar al carrito, va a ejecutar como callback la funcion recibida por prop y se le pasa cmo argumento la cantidad, en caso de no tener stock lo deshabilitamos con disabled !stock  */}
    </>
  );
};
//NOTA: flexGrow para que ocupe todo el ancho
export default ItemActions;
