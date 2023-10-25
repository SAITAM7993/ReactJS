import { FormControl, TextField, Button } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Title from '../Title/Title';
import Grid from '@mui/material/Grid';
import Message from '../Message/Message';
import { Link } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const initialState = {
  name: '',
  email: '',
  email2: '',
  phone: '',
};

const CheckOut = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart, clearCart, cartQuantity } = useContext(CartContext);

  const [values, setValues] = useState(initialState); //un estado para manejar todos los valores ingresados a la vez
  const [purchaseId, setPurchaseId] = useState(''); //para guardar el nro de order
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    //recibo un objeto con todo lo que estoy escribiendo en values
  };

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //genero la ordenen firebase
    const docRef = await addDoc(collection(db, 'orders'), {
      values,
      cartProducts,
    });
    setValues(initialState); //limpio los campos
    setPurchaseId(docRef.id); //guardo el nro de orden
    clearCart(); //limpio el carrito porque ya se lo mande en cartProducts
  };

  //values es un bojeto, entonces ya se lo pasa entero
  return (
    <>
      <Title title='Check out' />
      <FormControl
        component='form'
        fullWidth
        defaultValue=''
        onSubmit={handleOnSubmit}
        autoComplete='off'
      >
        <TextField
          name='name'
          id='form-name'
          required
          value={values.name}
          onChange={handleOnChange}
          type='text'
          color='primary'
          label='Your full name'
          sx={{ mb: 3 }}
        />
        <TextField
          name='email'
          id='form-email'
          value={values.email}
          onChange={handleOnChange}
          type='email'
          color='primary'
          label='Your e-mail'
          required
          sx={{ mb: 3 }}
        />
        <TextField
          name='email2'
          id='form-email-2'
          required
          value={values.email2}
          onChange={handleOnChange}
          type='text'
          color='primary'
          label='Repeat your e-mail'
          sx={{ mb: 3 }}
        />
        <TextField
          name='phone'
          id='form-phone'
          required
          value={values.phone}
          onChange={handleOnChange}
          sx={{ mb: 3 }}
          type='text'
          color='primary'
          label='Phone'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          disabled={cartQuantity() === 0}
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          startIcon={<MonetizationOnIcon />}
        >
          GENERATE ORDER
        </Button>
      </FormControl>
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
          lg={12}
          display='flex'
          justifyContent='right'
        >
          <Link
            to='/cart'
            className='customLink'
          >
            <Button
              variant='outlined'
              size='medium'
              color='primary'
              disabled={cartQuantity() === 0}
              sx={{
                boxShadow: 'none',
                marginLeft: 2,
              }}
              startIcon={<ShoppingCart />}
            >
              Back to cart
            </Button>
          </Link>
          <Link
            to='/category/all'
            className='customLink'
          >
            <Button
              variant='outlined'
              size='medium'
              color='primary'
              sx={{
                boxShadow: 'none',
                marginLeft: 2,
              }}
              startIcon={<HomeIcon />}
            >
              Back to home
            </Button>
          </Link>
        </Grid>
      </Grid>
      {purchaseId && (
        <Message
          type='success'
          message={`Order [ ${purchaseId} ] - generated successfully`}
        />
      )}
      {/* si purchaseId no es vacío, muestro el mensaje*/}
    </>
  );
};
export default CheckOut;

/* NOTAS
required hace que tenga un "*", si n ose pone default value se carga arriba el nombre del campo */
