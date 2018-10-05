import React, { Component } from 'react';
import {Footer} from 'react-materialize';

class My_Footer extends Component {

  render() {

    return (
      <div className="My_Footer" >

<Footer copyrights="@Copyright Santiago Perrin - Hector Lahitte" className='blue'
  moreLinks={
    <a className="grey-text text-lighten-4 right" >Octubre 2018</a>
  }
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="/listado">Lista de usuarios</a></li>
      <li><a className="grey-text text-lighten-3" href='https://github.com/santipe'>Git Hub</a></li>
    </ul>
  }>
    <p className="grey-text text-lighten-4"> Contenido de referencia utilizado para completar el TP: 
    <ul>
    <li><a className="grey-text text-lighten-3" 
href='https://material.io'><i className="material-icons">arrow_right_alt
</i>MaterialIo</a></li>
      <li><a className="grey-text text-lighten-3" 
href='https://materializecss.com'><i className="material-icons">arrow_right_alt
</i>MaterilizeCss</a></li>
      <li><a className="grey-text text-lighten-3"
href='https://material-ui.com'><i className="material-icons">arrow_right_alt
</i>MaterialUi</a></li>
      <li><a className="grey-text text-lighten-3"
href='http://getbootstrap.com/'><i className="material-icons">arrow_right_alt
</i>Bootstrap</a></li>
    </ul></p> 
</Footer>
      </div>   
    );
  }
}

export default My_Footer;


