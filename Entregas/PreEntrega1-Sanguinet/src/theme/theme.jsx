/* mediante createTheme se pueden crear los temas personalizados */

import { createTheme } from '@mui/material/styles';

//palette es la paleta de colores, podemos cambiar los predefinidos
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;


