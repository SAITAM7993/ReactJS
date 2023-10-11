import ItemCard from '../ItemCard/ItemCard';
import Grid from '@mui/material/Grid';

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
const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Grid
            item
            container
            direction='column'
            display='flex'
            justify='center'
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={product.id}
          >
            <ItemCard
              id={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              category={product.category.name}
              description={product.description}
              stock={10}
            />
          </Grid>
        );
      })}
    </>
  );
};
export default ItemList;
/* por ahora stock siempre 10, la api no tenia el atr stock */
