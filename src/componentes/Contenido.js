import React, { Component, Fragment } from 'react';
import '../css/style_.css';

//--------------defir class y la exportar---------
export default class Contenido_ extends Component{
  StyleFunction(){
    return{
      color:'#000',
      fontSize:'30px',
    }
  }
  render(){
    const subtitulo_={'fontSize':'40px'}

    return(
      <Fragment>  
          <div className='contenido_content'>
            oijijijji   
            <h2 className={subtitulo_}>subtitulo</h2>   
            <div style={this.StyleFunction()}>
              Texto...
            </div>       
          </div> 
           
      </Fragment>
    );
  }//---render
}//--class




