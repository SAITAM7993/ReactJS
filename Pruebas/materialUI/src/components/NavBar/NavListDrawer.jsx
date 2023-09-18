import {
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

export default function NavListDrawer({ navLinks }) {
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
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
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
