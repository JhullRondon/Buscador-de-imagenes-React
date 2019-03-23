import React, { Component } from 'react';
import Buscador from './Buscador';
import Resultado from './Resultado';
import '../css/spiner.css';


class App extends Component {

  state = {
    busqueda: '',
    imagenes: [],
    cargando: false,
    totalPaginas: '',
    pagina: ''
  }

  consultarAPI = async () => {
    let query = this.state.busqueda;
    query = query.replace(' ', '+');
    const pag = this.state.pagina || 1;

    const url = `https://pixabay.com/api/?key=11947707-80a47598f19897b000854c32f&q=${query}&image_type=all&per_page=20&page=${pag}`;
    await fetch(url)
      .then(res => {      
        this.setState({
          cargando: true
        });
        return res.json();
      })
      .then( res => {
        setTimeout( () => {
          this.setState({
            imagenes: res.hits,
            cargando: false,
            totalPaginas: Math.ceil(res.totalHits / 20)
          })
        }, 1500)
      });
    this.scroll();  
  }

  getQuery = (query) => {
    this.setState({
      busqueda: query,
      pagina: 1
    }, () => { // esto permite que al completarse el setState prosiga a ejecutar esta arrowFunction
      this.consultarAPI();
    })
  }

  prevPag = () => {
    let pag = this.state.pagina;
    // verificamos si la pagina actual es mayor a 1
    if (pag > 1 ){
      this.setState({
        pagina: this.state.pagina - 1
      }, () => this.consultarAPI())
    }
  }

  nextPag = () => {
    let pag = this.state.pagina;
    // verificamos si la pagina actual es mayor a 0
    if (pag > 0 && pag < this.state.totalPaginas){
      this.setState({
        pagina: this.state.pagina + 1
      }, () => this.consultarAPI())
    }
  }

  scroll = () => {
    const element = document.getElementById('inicio');
    element.scrollIntoView('smooth', 'start');
  }

  render() {

    const cargando = this.state.cargando;

    const show = cargando ? <div className="spinner"></div>:
    <Resultado 
      imagenes={this.state.imagenes}
      query={this.state.busqueda}
      pagina={this.state.pagina}
      totalPaginas={this.state.totalPaginas}
      prevPag={this.prevPag}
      nextPag={this.nextPag}
    />;
    return (
      <div className="app container">
        <div id='inicio' className='jumbotron'>
          <p className='lead text-center'>Buscador de Imágenes</p>
          <Buscador getQuery={this.getQuery} />
        </div>

        <div className='row'>
          {show}
        </div>
      </div>
    );
  }
}

export default App;
