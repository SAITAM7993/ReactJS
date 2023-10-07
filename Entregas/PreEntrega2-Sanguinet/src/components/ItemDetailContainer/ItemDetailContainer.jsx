/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../api/getProductById';
import { useParams } from 'react-router-dom';
//importo url de .env para no exponer la url

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getProductById(id).then((product) => setProduct(product)); //la guardo en useState de productos "products"
  }, [id]);

  return (
    <>
      <Box>
        <ItemDetail product={product} />
      </Box>
    </>
  );
};

export default ItemDetailContainer;
