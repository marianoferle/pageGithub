import React, { Component, Fragment } from 'react';
import HeaderIndex from './componentes/header_titulo';
import Contenido_ from './componentes/contenido';


class App extends Component{
  render(){
    return (  
      <Fragment> 
        <HeaderIndex titulo="GitHub Index"/>  
        <Contenido_/>
      </Fragment>   
    );
  }//---render
}//---class


export default App;
