import Typography from '@mui/material/Typography';

const ItemDetail = ({ title, price, description }) => {
  return (
    <>
      <Typography
        variant='h5'
        color='initial'
        component='p'
        my={2}
      >
        {title}
      </Typography>

      <Typography
        variant='body2'
        color='initial'
        my={2}
      >
        {description}
      </Typography>
      <Typography
        variant='h5'
        color='initial'
        component='p'
      >
        ${price}
      </Typography>
    </>
  );
};
export default ItemDetail;
