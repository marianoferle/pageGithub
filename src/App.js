import React, { Component, Fragment } from 'react';
import HeaderIndex from './componentes/header_titulo';

class App extends Component{
  render(){
    return (  
      <Fragment> 
        <HeaderIndex titulo="GitHub Index"/>  
      </Fragment>   
    );
  }//---render
}//---class


export default App;
