import React, { Component, Fragment } from 'react';
import '../css/style_.css';
import VerDato from './verDato';

//----validar tipo de dato----------
import PropTypes from 'prop-types';

class VerDatos extends Component{  
  render(){   
    return this.props.datos.map(dato_=> 
        <VerDato 
            dato={dato_} 
            key={dato_.id} 
            eliminar_={this.props.eliminarDato}
            activar_ ={this.props.activarDato}
        />
    );
      
  }//---render
}//--class


VerDatos.propTypes={ //p minuscula
  datos: PropTypes.array.isRequired, //P mayuscula
}


export default VerDatos;
