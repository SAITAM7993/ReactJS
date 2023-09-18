//import { useState } from 'react'

//fuentes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//import Random from './components/Random/Random';

import './App.css';
//mi tema personalizado

import { Container, ThemeProvider } from '@mui/material';
import ThemeBlack from './themes/ThemeBlack';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={ThemeBlack}>
        <Container sx={{ mt: 5 }}>
          <NavBar></NavBar>
        </Container>
      </ThemeProvider>
    </>
  );
};
/*
 <Random></Random> 
componente con varias pruebas
NUEVAS PRUEBAS, navbar con un drawer, menu que se abre al costado 
NOTAS****************************
-para aplicar el tema se debe englobar lo que querramos dentro de ThemeProvider
-ButtonGroup es una agrupacion de botones, le podemos dar el estilo en ese padre y los botones tendran ese estilo
-Box es un contenedor
-sx sirve para pasarle propiedades css a un componente
-IMPORTANTE con snippets materialui pude hacer que escribiendo muiButton autocomplete un button mui con sus propiedades
*/
export default App;
