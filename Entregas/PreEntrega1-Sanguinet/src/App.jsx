import { useState } from 'react'

//importo botones de mui 
//import { Button } from "@mui/material";
//import Button from "@mui/material/Button"; //segun video curso si se importa de esta manera y no la otra hace que se cargue mas rapido
//import Container from '@mui/material/Container';

import { Button, Container, Typography, ThemeProvider, Box } from "@mui/material"; //de esta manera puedo importar varios a la vez 

//importo fuente
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//importo componentes personalizados
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import theme from './theme/theme'; //importo mi tema personalizado
import './App.css'

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>          
      <ThemeProvider theme={theme}> {/*para importar un tema necesito esto y envolver todo lo que quiera con ese tema, theme es el nombre de mi tema*/ }
        <NavBar />      
        <Container maxWidth=""> {/*es un contenedor, le puedo pasar el tamaño MAXIMO */}             
          <ItemListContainer greeting ="Bienvenidos a la tienda"/>                 
          <Typography variant = "body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, debitis animi? Nemo ipsa, repellendus voluptatem dignissimoslibero molestias commodi earum? In maxime cum facere fugiat a sint vel consequatur totam!</Typography>
          <Button variant="contained" size="large">Comprar</Button>                   
        </Container>
      </ThemeProvider>;
    </>
  )
  
};
//nota1 a un componente mui le puedo pasar la prop sx para darle estilos css, ej sx={border: 3, borderStyle: "solid"}}
//nota2 en jsx no se puede usar - en las props por eso se usa camelCase
//nota3 typography es para manejar textos, se le pasa props para cambiar el comportamiento, por defecto se comporta como parrafo
//nota4 tambien puedo renderizar por ej un h2 con estilo de h1 ej  <Typography variant ="h1" component = "h2">
//nota5 ver systemProps que se pueden usar en typography o box por ej
//nota 6 al boton le puedo pasar la prop startIcon={<DeleteIcon />} y dentro el icono que quiera como componente

export default App
