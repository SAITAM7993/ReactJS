/* mediante createTheme se pueden crear los temas personalizados */
import { createTheme } from '@mui/material/styles';

//palette es la paleta de colores, podemos cambiar los predefinidos
const ThemeBlack = createTheme({
  palette: {
    mode: 'light', //modo en el que se va a afectar el tema, en este caso es el light
    primary: {
      main: '#141718',
    },
    secondary: {
      main: 'rgba(1,150,255,0.91)',
    },
    error: {
      main: '#ff2d2d',
    },
  },
});

export default ThemeBlack;
