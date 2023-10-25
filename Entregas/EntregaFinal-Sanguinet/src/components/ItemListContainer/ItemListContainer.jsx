/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
// DB Firestore
import { db } from '../../firebase/firebaseConfig';
// Firestore
import { collection, query, getDocs, orderBy, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  let { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let q; //la ida es que si viene all o vacio traiga todo filtrado por categoria, sino traigo la gategoria
      if (categoryId == 'all' || !categoryId) {
        q = query(collection(db, 'products'), orderBy('categoryId'));
      } else {
        q = query(
          collection(db, 'products'),
          where('categoryId', '==', categoryId)
        );
      }
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push(doc.data()); //con esto lo traigo por defecto
      });
      setProducts(docs);
    };
    getProducts();
  }, [categoryId]);

  return (
    <>
      <Title title={categoryId ? categoryId.toUpperCase() : null} />
      <Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={3}
      >
        <ItemList products={products} />
      </Grid>
    </>
  );
};
export default ItemListContainer;
