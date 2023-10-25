/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
//importo url de .env para no exponer la url
// DB Firestore
import { db } from '../../firebase/firebaseConfig';
// Firestore
import { collection, query, getDocs, where } from 'firebase/firestore';
const ItemDetailContainer = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, 'products'),
        where('id', '==', parseInt(id)) //para filtrar por id de prod
      );
      let filteredProduct; //como filtro un producto declaro una variable que luego le cargo doc.data
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        filteredProduct = doc.data();
      });
      setProduct(filteredProduct);
    };
    getProduct();
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
