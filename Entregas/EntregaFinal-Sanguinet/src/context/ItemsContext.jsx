/* por el momento no lo uso */
// import { createContext, useState, useEffect } from 'react';
// import { getProducts } from '../api/getProducts';
// //1-CREO EL CONTEXTO // lo vamos a exportar y utilizar en este file en .Provider
// export const ItemsContext = createContext();
// //2-CREO EL COMPONENTE PROVIDER (ItemsProvider)
// //la anotacion de este xport al improtar  es import {..}
// export const ItemsProvider = ({ children }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     getProducts().then((products) => setItems(products));
//   }, []);

//   return (
//     //3- retornamos el context con itemscontext . provider
//     <ItemsContext.Provider value={[items]}>{children}</ItemsContext.Provider>
//   );
// };
