import './App.css';
import { useEffect, useState } from 'react';

// DB Firestore
import { db } from './firebase/firebaseConfig';

// Firestore
import { collection, query, getDocs, where } from 'firebase/firestore';

import CardPlayer from './components/CardPlayer';

const App = () => {
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
    <div className='App'>
      <h1>Firebase App</h1>
      <div className='grid'>
        {products.map((product) => {
          console.log(product);
          return (
            <CardPlayer
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
