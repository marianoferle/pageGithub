import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//-----componentes---------
import HeaderIndex from './componentes/Header_titulo';
import Contenido1 from './componentes/Contenido';
import Formulario1 from './componentes/Formulario';
import VerDatos from './componentes/verDatos';
import PostDatos from './componentes/Post_';

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

  eliminarTexto = (id) =>{
    const nuevoTexto = this.state.datos.filter(dat => dat.id !== id);
    this.setState({datos:nuevoTexto});
  }

  //---activo---
  activarTexto = id => {
    const nuevoTexto = this.state.datos.map(dat => {
        if(dat.id === id){
          dat.activo = !dat.activo;
        }
        return dat;
    });
    this.setState({datos:nuevoTexto});
  }
  
  render(){
    console.log(this.state);  
    return (    
      <Fragment>    
        <Router>          
              {/*---------links-----------*/}
              <Link to="/">Home</Link>
              <Link to="/posts">Post</Link>
              <Link to="/contenido">Contenido</Link>

              <HeaderIndex titulo="GitHub Index" edad={32} />  
              
              {/*-------rutas---------------*/}              
              <Route exact path="/" render={()=>{
                return <div>
                    <VerDatos 
                      datos={this.state.datos} 
                      eliminarDato={this.eliminarTexto} 
                      activarDato={this.activarTexto} 
                    />
                    <Formulario1 agregarTexto={this.agregarTexto}/>
                </div>
              }}>
              </Route>
              <Route path="/posts" component={PostDatos}/>
              <Route path="/contenido" component={Contenido1}/>            
          </Router>
      </Fragment>   
    );
  }//---render
}//---class


export default App;
