import ShoppingCart from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import { Tooltip } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
//tomo la cantidad de items del context

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      {/* para poner un tooltip tengo que englobar el icono que quiero tooltipear */}
      <Link
        to='/cart'
        className='cartWidget'
      >
        <Tooltip
          title='View cart'
          arrow
        >
          {/* VER SI VALE LA PENA OCULTAR EL CARRITO CUANDO NO HAY ITEMS
          display: {{cartQuantity()} > 0 ? 'block' : 'none'} }
          */}
          <IconButton
            sx={{
              color: { xs: 'primary', lg: 'white' },
            }}
          >
            <Badge
              badgeContent={cartQuantity()}
              color='secondary'
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>
    </>
  );
};
export default CartWidget;
