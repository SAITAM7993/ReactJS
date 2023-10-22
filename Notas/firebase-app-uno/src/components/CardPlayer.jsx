/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardPlayer = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          image={product.Images[0]}
          alt='green iguana'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {product.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {product.price}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {product.categoriId}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPlayer;
