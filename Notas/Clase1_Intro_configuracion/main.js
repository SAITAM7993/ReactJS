/*
NOTAS

REACT

Funcionamiento de REACT
MVC = modelo vista controlador (react esta orientada a v)

*react permite escribir el codigo de una interfaz de usuario y luego reutilizar ese componente
*tiene una muy buena performance
*tiene herramienta virtual dom
(DOM) document objet model, representación en forma de árbol del sitio web
(VDOM) es un DOM que react guarda en memoria y cuando se produce un cambio, dispara un algoritmo que identifica qué cambió y renderiza solo lo que cambió (solamente cambia el nodo que cambió) (con JS normal se actualiza TODO el DOM)


VDOM -  respeusta que es
el VIRTUAL DOM es una copia del DOM que REACT guarda en memoria, al momento de producirse algún cambio REACT ejecuta un algoritmo de diffing
identifica el nodo que cambió y lueog ejecuta el proceso de reconciliación que cambia únicamente ese nodo

Flujo de datos unidireccional (de arriba hacia abajo)

----------------------------------------------------------------
NODE
qué es NODE
es un entorno de ejecución de JS por fuera del browser
se pueden desarrollar apps moviles, apis rest con js (con framework ness, express ), no solo webs ya que permite ejecutar codigo js, aplicaciones desktop

que es NPM
es un gestor de paquetes de JS, lo usamos para instalar librerias de de js con NPM install, viene con NODE
npm -v 
node -v se usa para ver la version que tenemos

que es CLI
vamos a utilizar npm cuando querramos utilizar algún CLI (command line interface), interfaz de linea de comando, es un comando para hacernos de un template de react de la cual vamos a comenzar a trabajar

qué es GIT
es una herramienta que permite tener reversionados y trabajar en equipo

----------------------------------------------------------------------------------
VITE VS CREATE REACT PARA CONSEGUIR TEMPLATES...
----------------------------------------------------------------------------------
REACT (demora)
npx create-react-app nombre-app (no se puede usar mayus ni espacios)
CARPETAS QUE SE CREAN
-node_modules - binarios
-public - 
-src

se crea un html en index.html con un div con id "root", en index.js que carga el react dom con el getelementById ,
index.js tiene un import app de ./app que es el componente pare de nuestra app
----------------------------------------------------------------------------------

VITE (demora MUCHO menos y hace que el desarrollo sea un poco más veloz)
npm create vite@latest (rellenamos lo que nos piden..)
npm install
np run dev

CARPETAS QUE SE CREAN
-node_modules
-public
-src


*/