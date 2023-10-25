import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ItemActions from '../ItemActions/ItemActions';
import Title from '.././Title/Title.jsx';
import Grid from '@mui/material/Grid';

const ItemDetail = ({ product }) => {
  return (
    <>
      <Title title={product.title}></Title>
      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='left'
        justifyContent='center'
      >
        <Grid item>
          <Typography
            variant='body1'
            color='initial'
          >
            {product.description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='h4'
            color='initial'
            component='p'
          >
            ${product.price}
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
            variant='body1'
            component='p'
            color={product.stock == 0 ? 'error' : null}
          >
            {product.stock != 0 ? `Stock : ${product.stock}` : 'Out of stock'}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Grid
            item
            xl={3}
          >
            <ItemActions
              id={product.id}
              title={product.title}
              price={product.price}
              stock={product.stock}
            ></ItemActions>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ItemDetail;
