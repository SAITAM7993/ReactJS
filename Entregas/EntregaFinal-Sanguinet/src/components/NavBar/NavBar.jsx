import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';

import './NavBar.css';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavListDrawer from './NavListDrawer';
import CartWidget from '../CartWidget/CartWidget';

import { Search, SearchIconWrapper, StyledInputBase } from './NavBarSearch';
import MenuList from '../MenuList/MenuList';
/******************** PARM ENTRADA DE NAVBAR ********************/
//lista de objetos link para user en el navlist
export const navLinks = [
  {
    title: 'ABOUT',
    icon: <InfoIcon />,
    path: '/about',
  },
  {
    title: 'CONTACT',
    icon: <MailIcon />,
    path: '/contact',
  },
];

//brand de la tienda
export const brand = 'F-STORE';

/******************** PARM ENTRADA DE NAVBAR - FIN ********************/

const NavBar = () => {
  const [open, setOpen] = useState(false);
  {
    /* para menejar la apertura del drawer */
  }
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            <Link to='/'>
              {/* flexGrow 1 hace que el crecimiento sea el maximo posible, eso empuja todo el resto a la derecha */}
              {brand} {/* le paso la marca */}
            </Link>
          </Typography>
          <Box sx={{ display: { lg: 'flex', marginRight: 15 } }}>
            <MenuList></MenuList>{' '}
            {/* componente que trae las categorias desde firebase */}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* con esto lo oculto cuando es MUY pequeño (mobile) y lo muestro
            cuando es mas grande (sm), lo uso tambien en menuicon para ocultarlo
            en vistas desktop pero invertido, abajo recorro los navlinks que le
            pase y los cargo */}
            {navLinks.map((item) => (
              <Link
                className='li'
                key={`${item.title}`}
                to={`${item.path}`}
              >{`${item.title}`}</Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CartWidget />
          </Box>
          <IconButton>
            {/* le digo que voy a poner un boton */}
            <MenuIcon
              sx={{
                color: 'white',
                display: { xs: 'flex', lg: 'none' },
              }}
              onClick={() => setOpen(true)}
            />
            {/* icono hamburguesa */}
          </IconButton>
        </Toolbar>

        {/* todo lo que se le ponga en toolbar va a ser con flex pegado uno al lado del otro*/}
      </AppBar>

      <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
        sx={{ display: { xs: 'flex', lg: 'none' } }}
      >
        {/*esto lo hago para que si pasa a una tablet o gira el cel por ej no muestre el drawer*/}
        <NavListDrawer navLinks={navLinks} />
        {/* lo mando como props a navlistdrawer */}
      </Drawer>
      {/* <NavListDrawer/> */}
    </>
  );
};
//onClick es para que haga algo al clickear (evento onClick)
//el usestate setea el open en true en el onclick, el drawer ve esa variable y la usa para mostrar o no el drawer que contiene el navlistdrawer
//anchor es para decirle en donde va a aparecer y el onClose es para que cuando se de click en otro lado se cierre seteando el open en false
/*
{navLinks.map((item) => (
            <Button
              color='inherit'
              key={item.title}
            >
              {item.title}
            </Button>
          ))}
con esto recorro y creo un button con cada titulo de la lista de titulos
*/

export default NavBar;
