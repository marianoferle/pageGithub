import React, { Component, Fragment } from 'react';
import '../css/style_.css';

class Header_ extends Component{
  render(){
    const {titulo} = this.props;
    return(
      <Fragment>  
          <h1 className="contenido_header">
            {titulo}
          </h1>   
      </Fragment>
    );
  }//---render
}//--class

export default Header_;
