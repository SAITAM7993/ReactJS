/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getProducts } from '../../api/getProducts';
import ItemList from '../ItemList/ItemList';
import { getProductsByCategoryId } from '../../api/getProductsByCategoryId';
import Title from '../Title/Title';
// DB Firestore
import { db } from '../../firebase/firebaseConfig';
// Firestore
import { collection, query, getDocs, where } from 'firebase/firestore';

const ItemListContainer = () => {
  // const [products, setProducts] = useState([]);
  // let { categoryId } = useParams();
  // /* segun lo seleccionado hago una llamada a la api para obtener una categoria o todos */
  // useEffect(() => {
  //   //si viene una categoria filtro, si no viene o viene 0 cargo todos
  //   if (categoryId) {
  //     getProductsByCategoryId(categoryId).then((products) =>
  //       setProducts(products)
  //     );
  //   } else {
  //     getProducts().then((products) => setProducts(products));
  //   }
  // }, [categoryId]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, 'products')
        //,
        // where("position", "==", "goalkeeper")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, []);

  return (
    <>
      <Title title={'a'} />

      <Grid
        container
        className='ProductList'
        display='flex'
        justifyContent='center'
        spacing={3}
      >
        {console.log(products)}
        <ItemList products={products} />
      </Grid>
    </>
  );
};
export default ItemListContainer;
