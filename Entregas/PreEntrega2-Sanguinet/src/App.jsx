//import { useState } from 'react'
//fuentes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//componentes mui
import { Container, ThemeProvider } from '@mui/material'; //de esta manera puedo importar varios a la vez
//componentes personalizados
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
//mi tema personalizado
import theme from './theme/theme';
import './App.css';

const App = () => {
  //const [count, setCount] = useState(0)
  return (
    <>
      <ThemeProvider theme={theme}>
        {/*para importar un tema necesito esto y envolver todo lo que quiera con ese tema, theme es el nombre de mi tema*/}
        <NavBar />
        <Header
          title={'F-STORE'}
          subtitle={'All you need in one place'}
        />
        <Container maxWidth='lg'>
          <ItemListContainer category='All' />
        </Container>

        {/* </Container> */}
      </ThemeProvider>
      ;
    </>
  );
};
//nota1 a un componente mui le puedo pasar la prop sx para darle estilos css, ej sx={border: 3, borderStyle: "solid"}}
//nota2 en jsx no se puede usar - en las props por eso se usa camelCase
//nota3 typography es para manejar textos, se le pasa props para cambiar el comportamiento, por defecto se comporta como parrafo
//nota4 tambien puedo renderizar por ej un h2 con estilo de h1 ej  <Typography variant ="h1" component = "h2">
//nota5 ver systemProps que se pueden usar en typography o box por ej
//nota6 al boton le puedo pasar la prop startIcon={<DeleteIcon />} y dentro el icono que quiera como componente
/*nota7 
import { Button } from "@mui/material";
import Button from "@mui/material/Button"; //segun video si se importa de esta manera y no la anterior hace que se cargue mas rapido
;*/

export default App;
