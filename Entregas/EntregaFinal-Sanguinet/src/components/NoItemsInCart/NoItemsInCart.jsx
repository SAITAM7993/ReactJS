import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
const NoItemsInCart = () => {
  return (
    <>
      <Box
        p={'10%'}
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant='h3'
          color='initial'
          align='center'
        >
          No items in cart
        </Typography>
      </Box>
    </>
  );
};
export default NoItemsInCart;
