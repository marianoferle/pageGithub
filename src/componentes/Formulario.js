import React, { Component, Fragment } from 'react';
import '../css/style_.css';

//----validar tipo de dato----------
import PropTypes from 'prop-types';


class Formulario_ extends Component{
  state = {
    titulo:'',
    descripcion:''
  }

  //metodo / this.enviarForm
  //---onSubmit----
  enviarForm = e => {
    //console.log('ok',e);
    //console.log('estado', this.state);
    this.props.agregarTexto(this.state.titulo,this.state.descripcion);
    e.preventDefault();
  }


  //---onChange---
  escribirTexto = e =>{
    //console.log(e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    });    
  }

  render(){             
    //console.log(this.props);
    //const {datos_} = this.props;
    return(
      <Fragment>  
         <form onSubmit={this.enviarForm}>
           <input 
              type="text" 
              name="titulo"
              placeholder="input de texto" 
              onChange={this.escribirTexto} 
              value={this.state.titulo} 
           />
           <br/>
           <br/>
           <textarea 
              name="descripcion"
              placeholder="textarea ... " 
              onChange={this.escribirTexto} 
              value={this.state.descripcion}              
            ></textarea>
           <input type="submit" value="enviar"/>
         </form>

        <div>
          <h3>{this.props.datos.titulo}</h3>      
          <h3>{this.props.datos.descripcion}</h3>    
          <h3>{this.props.datos.id}</h3>
        </div>           
      </Fragment>
    );
  }//---render
}//--class


Formulario_.propTypes={ //p minuscula
  datos: PropTypes.array.isRequired, //P mayuscula
}


export default Formulario_;
