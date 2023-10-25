import ItemCard from '../ItemCard/ItemCard';
import Grid from '@mui/material/Grid';

/*
product items
{
    "id": 434123dsf,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "categoryId" : "Phones",
    "stock", 2,
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
              category={product.categoryId}
              description={product.description}
              stock={product.stock}
            />
          </Grid>
        );
      })}
    </>
  );
};
export default ItemList;
