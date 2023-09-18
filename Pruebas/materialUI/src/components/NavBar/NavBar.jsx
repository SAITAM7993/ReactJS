//importo el listDrawer para usar en el navbar
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavListDrawer from './NavListDrawer';

//lista de objetos link para user en el navlist
const navLinks = [
  {
    title: 'Home',
    path: '#',
    icon: <HomeIcon />,
  },
  {
    title: 'Login',
    path: '#login',
    icon: <LoginIcon />,
  },
  {
    title: 'Register',
    path: '#register',
    icon: <HowToRegIcon />,
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton>
            {/* le digo que voy a poner un boton */}
            <MenuIcon
              sx={{ color: 'white' }}
              onClick={() => setOpen(true)}
            />
            {/* icono hamburguesa */}
          </IconButton>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}
          >
            {/* flexGrow 1 hace que el crecimiento sea el maximo posible, eso empuja todo el resto a la derecha */}
            MENU
          </Typography>
          {navLinks.map((item) => (
            <Button
              color='inherit'
              key={item.title}
              component='a'
              href={item.path}
            >
              {item.title}
            </Button>
          ))}
        </Toolbar>
        {/* todo lo que se le ponga en toolbar va a ser con flex pegado uno al lado del otro*/}
      </AppBar>

      <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />{' '}
        {/* lo mando como props a navlistdrawer */}
      </Drawer>
      {/* <NavListDrawer/> */}
    </>
  );
}
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
