import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

/*
product items
id:1,
title:'...',
price:'...',
category:'...',
description:'...',
image:'...'
                     */

const ProductCard = ({ product }) => {
  return (
    <Card
      className='card'
      sx={{
        boxShadow: 0,
        maxWidth: 280,
        height: '100%',
      }}
    >
      <CardMedia
        className='card__Img'
        component='img'
        alt={product.title}
        height='auto'
        image={product.image}
      />

      <CardContent className='card__body'>
        <Typography
          gutterBottom
          variant='body1'
          component='div'
        >
          {product.title}
        </Typography>

        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
          variant='body2'
          color='text.secondary'
        >
          {product.description}
        </Typography>

        <Typography
          color='secondary'
          mt={3}
          variant='h5'
          component='div'
        >
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions
        className='card__actions'
        alignItems='flex-end'
      >
        <Button
          sx={{ boxShadow: 'none', width: '100%' }}
          size='small'
          color='success'
          variant='contained'
          startIcon={<AddShoppingCartIcon />}
        ></Button>
        <Button
          sx={{ boxShadow: 'none', width: '100%' }}
          size='small'
          color='primary'
          variant='contained'
          startIcon={<ReadMoreIcon />}
        ></Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
