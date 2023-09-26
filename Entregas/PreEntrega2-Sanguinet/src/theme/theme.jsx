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
      main: '#595591',
    },
    success: {
      main: '#82ffa1',
    },
  },
});

export default theme;
