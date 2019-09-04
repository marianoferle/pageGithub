import React, { Component, Fragment } from 'react';
import '../css/style_.css';

//----validar tipo de dato----------
import PropTypes from 'prop-types';

class VerDato extends Component{  
  state = {
    dato:this.props.dato
  }  

  render(){  
    return(
      <Fragment>  
           {this.state.dato.titulo} - {this.state.dato.descripcion}
           <br/>     
      </Fragment>
    );
  }//---render
}//--class


VerDato.propTypes={ //p minuscula
  dato: PropTypes.object.isRequired, //P mayuscula
}

export default VerDato;
