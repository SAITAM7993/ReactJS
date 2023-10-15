import ShoppingCart from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Tooltip } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//tomo la cantidad de items del context

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      {/* para poner un tooltip tengo que englobar el icono que quiero tooltipear */}
      <Tooltip title='Cart'>
        <IconButton
          aria-label='show 4 new mails'
          color='inherit'
        >
          <Badge
            badgeContent={cartQuantity()}
            color='secondary'
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};
export default CartWidget;
