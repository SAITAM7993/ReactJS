import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <>
      <Grid
        container
        display='flex'
        direction='row'
        justifyContent='center'
        spacing={2}
      >
        <Grid
          item
          lg={4}
          md={4}
          xs={4}
        >
          {cartItem.title}
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          xs={2}
        >
          {cartItem.quantity}
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          xs={2}
        >
          ${cartItem.price}
        </Grid>
        <Grid
          item
          lg={3}
          md={2}
          xs={3}
        >
          QUITAR
        </Grid>
      </Grid>
    </>
  );
};
export default CartItem;
