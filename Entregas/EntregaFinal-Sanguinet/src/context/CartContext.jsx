import { createContext, useState } from 'react';
import Message from '../components/Message/Message';
//creo el context
export const CartContext = createContext({
  cart: [],
});

//creo la funcion cartprovider que contiene toda la logica del carrito de compras, es un componente de alto orden
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //agregar item
  const addItem = (item, quantity) => {
    let error = false;
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      error = true;
    }
    return error;
  };

  //quitar item
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  //limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  //func para ver si el item esta en el carrito
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  //retorno la cantidad de items en el carrito
  const cartQuantity = () => {
    let sum = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    return sum;
  };

  //retorno la cantidad de items en el carrito
  const cartTotal = () => {
    let sum = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return sum;
  };
  //acc acumulador, curr el actual, inicio en 0, retorno la cantidad total (quantity)

  //con el provider comparto todas las funciones
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, cartQuantity, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
