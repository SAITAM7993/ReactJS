import ShoppingCart from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Tooltip } from '@mui/material';

const CartWidget = () => {
  return (
    <>
      {/* para poner un tooltip tengo que englobar el icono que quiero tooltipear */}
      <Tooltip title='Carrito'>
        <IconButton
          disablePadding
          aria-label='show 4 new mails'
          color='inherit'
        >
          <Badge
            badgeContent={4}
            color='error'
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>
    </>
  );
};
export default CartWidget;
