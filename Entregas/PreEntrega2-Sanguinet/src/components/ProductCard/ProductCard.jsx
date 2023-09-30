import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './ProductCard.css'; //de esta manera se improta CSS
/*
product items
{
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
                     */

const ProductCard = ({ product }) => {
  return (
    <Card
      className='card'
      sx={{
        boxShadow: 0,
        maxWidth: 320,
        height: '100%',
      }}
    >
      <CardMedia
        className='card__Img'
        component='img'
        alt={product.title}
        height='auto'
        image={product.images[0]}
      />

      <CardContent className='card__body'>
        <Typography
          gutterBottom
          variant='body1'
          component='p'
        >
          {product.title}
        </Typography>
        <Typography
          gutterBottom
          variant='body2'
          component='p'
          color='text.secondary'
        >
          {product.category.name}
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
          mt={2}
          variant='h5'
          component='div'
        >
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log('cantidad agregada ', quantity)}
        />
        {/*
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
         */}
      </CardActions>
    </Card>
  );
};
export default ProductCard;
