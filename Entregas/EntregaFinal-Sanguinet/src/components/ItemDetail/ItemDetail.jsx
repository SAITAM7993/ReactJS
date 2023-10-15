import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemActions from '../ItemActions/ItemActions';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const ItemDetail = ({ product }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography
              variant='h4'
              color='initial'
              component='p'
              my={2}
            >
              {product.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              color='initial'
              my={2}
            >
              {product.description}
            </Typography>
          </Grid>

          <Grid item>
            <ImageList cols={3}>
              {/* con este op ternario espero a que cargue la img y luego la renderizo, sino rompia  */}
              {product.images &&
                product.images.map((image) => (
                  <ImageListItem key={image}>
                    <img
                      src={image}
                      alt={product.title}
                    ></img>
                  </ImageListItem>
                ))}
            </ImageList>
          </Grid>
          <Grid item>
            <Typography
              variant='h4'
              color='initial'
              component='p'
              my={2}
            >
              ${product.price}
            </Typography>
          </Grid>
          <Grid
            item
            xl={3}
          >
            {/* <ItemActions
              initial={1}
              stock={10}
              onAdd={(quantity) => console.log('cantidad agregada ', quantity)}
              product={product}
            /> */}
            <ItemActions
              id={product.id}
              title={product.title}
              price={product.price}
              stock={50}
            ></ItemActions>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ItemDetail;
