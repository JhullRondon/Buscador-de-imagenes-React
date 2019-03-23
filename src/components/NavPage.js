import React, { Component } from 'react';

class NavPage extends Component {
  render() {

    const pagina = this.props.pagina;
    const totalPaginas = this.props.totalPaginas;

    const prevButton = (pagina >1) ?
      <button onClick={this.props.prevPag} type='button' className='btn btn-info mr-1'>&larr; Atras</button> :
      '';
    const nextButton = (pagina < totalPaginas) ?
    <button onClick={this.props.nextPag} type='button' className='btn btn-info'>Siguuiente &rarr;</button> :
      '';
    
    return (
      <div className='col-12 row py-5 justify-content-center'>
        {prevButton}
        {nextButton}
      </div>
    );
  }
}

export default NavPage;