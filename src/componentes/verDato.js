import React, { Component, Fragment } from 'react';
import '../css/style_.css';

//----validar tipo de dato----------
import PropTypes from 'prop-types';

class VerDato extends Component{  

  styles_(){
    return {
      width:'100%',      
      margin:'0px 0px 20px 0px',
      color: this.props.dato.activo ? '#ddd' : '#000',
      textDecoration: this.props.dato.activo ? 'line-through' : 'none'
    }
  }

  render(){  
    const {dato} = this.props; 
    return(
      <Fragment>  
          <p style={this.styles_()}>
              {dato.titulo} - 
              {dato.descripcion}  
              {dato.activo} -     
              <input type="checkbox" onChange={this.props.activar_.bind(this, dato.id)} />
              <button 
                style={botonDelete} 
                onClick={this.props.eliminar_.bind(this, dato.id)}
              >
                X
              </button>     
          </p>     
      </Fragment>
    );
  }//---render
}//--class

const botonDelete={ 
  color:'#f00'
}


VerDato.propTypes={ //p minuscula
  dato: PropTypes.object.isRequired, //P mayuscula
}

export default VerDato;
