import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemActions from '../ItemActions/ItemActions';
import { Link } from 'react-router-dom';
import './ItemCard.css'; //de esta manera se improta CSS
/* recibo desestructurados */
const ProductCard = ({
  id,
  title,
  image,
  price,
  category,
  description,
  stock,
}) => {
  return (
    <Card
      className='card__custom'
      sx={{
        height: '100%',
      }}
    >
      <Link
        key={`product-${id}`}
        to={`/item/${id}`}
      >
        <CardMedia
          className='card__Img'
          component='img'
          alt={`product-${id}`}
          height='auto'
          image={image}
        />
      </Link>
      <CardContent className='card__body'>
        <Typography
          gutterBottom
          variant='body1'
          component='p'
        >
          {title}
        </Typography>

        <Typography
          gutterBottom
          variant='body2'
          component='p'
          color='text.secondary'
        >
          {category}
        </Typography>
        <Typography
          my={1}
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
          {description}
        </Typography>
        <Typography
          my={1}
          variant='body2'
          component='p'
        >
          STOCK: {stock} | ID: {id}
        </Typography>

        <Typography
          color='secondary'
          mt={1}
          variant='h5'
          component='div'
        >
          ${price}
        </Typography>
      </CardContent>

      <CardActions className='card__actions'>
        {/* <ItemActions
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log('cantidad agregada ', quantity)}
          product={product}
        /> */}
        <ItemActions
          id={id}
          title={title}
          price={price}
          stock={50}
        ></ItemActions>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
