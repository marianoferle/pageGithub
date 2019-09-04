import React, { Component, Fragment } from 'react';
import '../css/style_.css';

class Header_ extends Component{
  render(){
    const {titulo} = this.props;
    const colorNegro = {color:'#fff'};
    return(
      <Fragment>            
          <h1 style={colorNegro} className="contenido_header">
            {titulo}           
          </h1>            
      </Fragment>
    );
  }//---render
}//--class

export default Header_;
