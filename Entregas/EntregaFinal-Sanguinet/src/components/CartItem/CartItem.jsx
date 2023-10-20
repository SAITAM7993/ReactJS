/* ESTE COMPONENTE SE CAMBIO, AHORA ESTA TODO EN CART YA QUE USO UNA TABLA */
// import { useContext } from 'react';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import { CartContext } from '../../context/CartContext';
// import ClearIcon from '@mui/icons-material/Clear';
// const CartItem = ({ cartItem }) => {
//   const { removeItem } = useContext(CartContext);
//   return (
//     <>
//        <Grid
//         container
//         display='flex'
//         direction='row'
//         justifyContent='center'
//       >
//         <Grid
//           item
//           lg={4}
//           md={4}
//           xs={4}
//         >
//           {cartItem.title}
//         </Grid>
//         <Grid
//           item
//           lg={1}
//           md={1}
//           xs={1}
//         >
//           {cartItem.quantity}
//         </Grid>
//         <Grid
//           item
//           lg={3}
//           md={3}
//           xs={3}
//         >
//           ${cartItem.price}
//         </Grid>
//         <Grid
//           item
//           lg={2}
//           md={2}
//           xs={2}
//         >
//           ${cartItem.price * cartItem.quantity}
//         </Grid>
//         <Grid
//           item
//           textAlign='right'
//           lg={2}
//           md={2}
//           xs={2}
//         >
//           <Button
//             key={cartItem.id + '-cartItemButton'}
//             variant='text'
//             sx={{ boxShadow: 'none' }}
//             size='small'
//             startIcon={<ClearIcon />}
//             onClick={() => removeItem(cartItem.id)}
//           >
//             Remove
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };
// export default CartItem;
// // onClick={() => removeItem(cartItem.id)} con la arrow func ()=> hago que se ejecute en el click y no en el mount/load
