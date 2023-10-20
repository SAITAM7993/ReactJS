import { useState, useContext } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemActions.css'; //de esta manera se improta CSS
const ItemActions = ({ id, title, price }) => {
  // const ItemActions = ({ stock, initial, onAdd }) => {
  const initial = 1; //1
  const stock = 10;
  const [quantity, setQuantity] = useState(initial);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    //armo el objeto para el carrito
    const item = {
      id,
      title,
      price,
      quantity,
    };
    addItem(item, quantity); //le paso el item y la cantidad
  };

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
          variant='outlined'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          size='small'
          onClick={decrement}
        >
          -
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
          className='actionButton'
          variant='outlined'
          size='small'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={increment}
        >
          +
        </Button>
        <Button
          variant='contained'
          size='small'
          color='success'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={() => {
            handleOnAdd(quantity);
          }} //hacer que sete en context
          disabled={!stock}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>

        <Button
          variant='contained'
          size='small'
          color='success'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          disabled={!stock}
          startIcon={<ShoppingCartIcon />}
        >
          <Link
            to='/cart'
            className='BuyNowLink'
            onClick={() => {
              handleOnAdd(quantity);
            }}
          >
            BUY NOW
          </Link>
        </Button>
      </Stack>

      {/* agregar al carrito, va a ejecutar como callback la funcion recibida por prop y se le pasa cmo argumento la cantidad, en caso de no tener stock lo deshabilitamos con disabled !stock  */}
    </>
  );
};
//NOTA: flexGrow para que ocupe todo el ancho
export default ItemActions;
