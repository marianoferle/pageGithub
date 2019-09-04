import React, { Component, Fragment } from 'react';
import '../css/style_.css';

//----validar tipo de dato----------
import PropTypes from 'prop-types';


class Header_ extends Component{
  render(){
    const {titulo, edad} = this.props;
    const colorNegro = {color:'#fff'};
    return(
      <Fragment>            
          <h1 style={colorNegro} className="contenido_header">
            {titulo}           
          </h1> 
          <h2>{edad}</h2>       
      </Fragment>
    );
  }//---render
}//--class


//PropTypes para que el modulo sepa q tipo de dato se le tiene q pasar
Header_.propTypes={ //p minuscula
  titulo: PropTypes.string.isRequired, //P mayuscula
  edad: PropTypes.number.isRequired,
}

export default Header_;
