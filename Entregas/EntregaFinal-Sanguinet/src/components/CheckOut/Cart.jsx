import { useState, useContext, useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */

import { CartContext } from '../../context/CartContext';
import Grid from '@mui/material/Grid';
import ItemList from '../ItemList/ItemList';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const { cart } = useContext(CartContext);

  console.log(cart);

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  /* segun lo seleccionado hago una llamada a la api para obtener una categoria o todos */
  console.log(cartProducts);
  return (
    <>
      {cartProducts.map((product) => (
        <div key={`prod-${product.id}`}>
          {product.title}-{product.price}
        </div>
      ))}
    </>
  );
};
export default Cart;
