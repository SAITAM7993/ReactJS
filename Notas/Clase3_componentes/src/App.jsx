import { useState } from 'react' //esto importa un hook 
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' //comentamos esto por ahora no se usa
import './App.css'

import Header from './components/Header/Header'; //escribo import y el componente que quiero.. esto lo hago para poder utilizarlo en app
//npm install @mui/material
const App = () => { //sintaxis que vamos a utilizar
  const [number, setNumber] = useState(1)  //esto crea una constante que usa useState, dentro de los [elNombreDeMiVariable, la funcion que me permite mutar esa variable], dentro de los (valorInicial de number por ejemplo) de useState se coloca el valor inicial
  //por convención la funcion que muta a la variable se pone setNumber (setNombreVariable)
/*
 
 */

  //es una expresion funcional //first class citizen
  //por ejemplo function foo() { return "hello" } //es una funcion declarativa o como la anterior //

  //como utilize el componente header ahora lo puedo utilizar como tag html con apertura y cierre ej <Header />
  return (
    
    <div>
      <h1>Componentes</h1>
      <Header 
        title="Soy un titilo desde una prop 1"
        subtitle="subtitulo 1"
      /> {/*estos son PARAMETROS o POPS NO SON ATRIBUTOS HTML, nota con ctrl y click sobre el componente te abre el componente*/}      
      <div className='CounterSection'>
        <p>{number}</p>
      </div>
    </div>

    /*lo bueno de usar componentes es que se pueden reutilizar y pasar props ej title ="" (porque es string) sino por ej sería title =  {}*/
      
  
  )
};

export default App //para poder usar el componente en otro lado se debe poner un export default nombreComponente, mejor hacerlo al final del todo
