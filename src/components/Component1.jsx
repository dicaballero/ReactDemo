const str = 'Este es un texto controlado por lain';
const number = 123456;
const array = ['Lain',4,10.1];
const boolean = true;
const func = ()=> 1+1;
const fecha = new Date();
const objeto = {nombre:"Lain",apellido:"iwakura"}


import PropTypes from "prop-types";

export const C1 = ({nombre, apellido }) => {

return (
 <>
     <h1>Props: </h1>
     <h4>{nombre}</h4>
     <h4>{apellido}</h4>
 </>
  )
}

C1.propTypes = {
 apellido: PropTypes.number.isRequired
}

C1.defaultProps = {
  apellido: 'Iwakura'
 }
 