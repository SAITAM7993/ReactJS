import "./Header.css"; //traigo el css
//si quisiera usar imagenes debería hacer el import nombre de var img, from ruta de img
//import React from 'react' en versiones nuevas no hace falta tener este código
//const name = " asds";
/*
 'no-unused-vars' : 'warn', //CON ESTO HAGO QUE EL ERROR no-unused-vars (variables no usadas) se marque como warning y no rompa la app, solo  nos tira el aviso, esto se hace en las rules de .eslintrc.cjs
*/


const Header = ({title, subtitle} ) => { //uso desestructuring, entre llaves pongo los parms del objeto que le llega en vez del codigo comentado abajo
  return (
      <div className="Header">          
          <h1>{title}</h1> 
          <h2>{subtitle}</h2>          
    </div>
  )
}

/* esta forma sirve pero lo mejor es usar destructuring
 <h1>{props.title}</h1> {/*en realidad esto no rompe, hay que utilizar react/prop-types o bien desactivarlo por el momento lo desactivamos en .eslintrc.cjs. 
          EL CÓDIGO HTML SIEMPRE VA ENTRE {} por lo que pongo props (obtjeto).nombrePropiedad*
          <h2>{props.subtitle}</h2>          
*/

export default Header //para poder usar el componente en otro lado se debe poner un export default nombreComponente, mejor hacerlo al final del todo
