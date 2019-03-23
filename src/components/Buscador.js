import React, { Component } from 'react';

class Buscador extends Component {

  queryRef = React.createRef();

  buscarImg = (e) => {
    e.preventDefault();

    const query = this.queryRef.current.value;

    if (query === '') {
      return null;
    }

    this.props.getQuery(query);

  }

  render() {
    return (
      <form onSubmit={this.buscarImg}>
        <div className='row'>
          <div className='form-group col-md-8'>
            <input ref={this.queryRef} className='form-control form-control-lg' type='text' placeholder='Busca tu imágen' />
          </div>
          <div className='form-group col-md-4'>
            <input className='btn btn-lg btn-danger btn-block' type='submit' value='Buscar...' />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;