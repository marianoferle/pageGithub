import React, { Component, Fragment } from 'react';

//-----componentes---------
import HeaderIndex from './componentes/Header_titulo';
import Contenido1 from './componentes/Contenido';
import Formulario1 from './componentes/Formulario';
import VerDatos from './componentes/verDatos';
//-json----------
import datos from './data_/datos_.json';
//console.log(datos);

class App extends Component{

  state = {
    datos: datos
  }

  agregarTexto = (titulo, descripcion) => {
    const nuevoTexto = {
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.datos.length
    } 
    this.setState({
      datos:[...this.state.datos, nuevoTexto]
    })   
    //console.log('agregar texto', nuevoTexto);
    //console.log('json', datos);
  }

  eliminarTexto = () =>{
    
  }
  
  render(){
    console.log(this.state);  
    return (  
      <Fragment> 
        <HeaderIndex titulo="GitHub Index" edad={32} />  
        <Contenido1/>
        <Formulario1 agregarTexto={this.agregarTexto}/>
        <VerDatos datos={this.state.datos} />
      </Fragment>   
    );
  }//---render
}//---class


export default App;
