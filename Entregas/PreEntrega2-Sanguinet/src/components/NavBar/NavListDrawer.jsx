import {
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import CartWidget from '../CartWidget/CartWidget';
import IconButton from '@mui/material/IconButton';

const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component='a'
                href={item.path}
              >
                <ListItemIcon>
                  <IconButton>{item.icon}</IconButton>
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {/* como el cartwidget lo tengo como iconbutton para que quede todo igual tengo que agregarle iconbutton a los listitemicon */}

          <ListItem
            disablePadding
            key='CartWidget'
          >
            <ListItemButton>
              <ListItemIcon>
                <CartWidget /> {/* icono para cerrar */}
              </ListItemIcon>
              <ListItemText>CARRITO</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            key='DrawerCloseButton'
          >
            <ListItemButton>
              <ListItemIcon>
                <IconButton>
                  <CloseIcon /> {/* icono para cerrar */}
                </IconButton>
              </ListItemIcon>
              <ListItemText>CERRAR</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
/*  con component "a" cambio el div que genera por defecto a un anchor
<Box sx={{ width: 250, bgcolor: 'lightsalmon' }}> //CAJA      
    <List>        //LISTA
    <ListItem> //ITEM DE LA LISTA
        <ListItemIcon>
            <InboxIcon /> //ICON QUE QUEREMOS DARLE
        </ListItemIcon> //ICONO DEL ITEM    
        <ListItemText primary='Inbox' /> //TEXTO DEL ITEM
    </ListItem>
    </List>
</Box>

   <Divider /> es un divisor (una linea)

    <ListItem>
          <ListItemButton> //ESTO HACE QUE SEA UN BOTON EN VEZ DE UN ICONO/ TEXTO 
            <ListItemText>Trash</ListItemText> //TEXTO DEL BOTON
          </ListItemButton>
        </ListItem>

        <ListItemText>Trash</ListItemText>
        <ListItemText primary = "Trash"/> //LO DE ARRIBA ES LO MISMO QUE ESTO, se puede usar primary = texto o poner el texto entre la etiqueta

  <ListItem disablePadding> el disablePadding hace que no tenga padding el item
        */
