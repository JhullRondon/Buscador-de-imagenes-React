import React, { Component } from 'react';
import Imagen from './Imagen';
import NoImage from './NoImage';
import NavPage from './NavPage';

class Resultado extends Component {
  
  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    const query = this.props.query;
    
    if ( imagenes.length === 0 && query !== '') {
      return (<NoImage />);
    } else if (imagenes.length === 0) {
      return null;
    }
    
    return (
      <React.Fragment>
        <div id='resultado' className='col-12 p-5 row'>
            {imagenes.map((imagen) => (
              <Imagen imagen={imagen} key={imagen.id}/>
            ))}
        </div>

        <NavPage
          pagina={this.props.pagina}
          totalPaginas={this.props.totalPaginas}
          nextPag={this.props.nextPag}
          prevPag={this.props.prevPag}
        />
      </React.Fragment>
    );

  }

  render() {

    return (
      <React.Fragment>
        {this.mostrarImagenes()}
      </React.Fragment>
    );
  }
}

export default Resultado;