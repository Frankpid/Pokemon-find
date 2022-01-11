import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import CantidadPokemon from './components/CantidadPokemon';
import CompraPokemon from './components/CompraPokemon';

// redux
import {Provider} from 'react-redux'
import store from './redux/store';
import BuscadorPokemon from './components/buscador/buscadorPokemon';
import ResultadoPokemon from './components/buscador/resultadoPokemon';

function App() {

  return (
    <Provider store={store}>
      <div className="App container">
        <div className='row'>
          <div className='col-12 pt-5'>

            <h2 className='text-white text-center'>Web application to find Pokemon</h2>

            <div className='card mt-5 mx-auto' style={{maxWidth: '600px'}}>
              <div className='row no-gutters'>
                <div className='col-12 col-sm-5' style={{borderRight: '1px solid #ddd'}}>
                  <img src="../img/pokemon.jpg" alt='Pokemon' className='card-img' />
                </div>

                <div className='col-12 col-sm-7'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemon />
                    </div>

                    <CompraPokemon />

                  </div>
                </div>
              </div>
            </div>

            {/* Buscardor */}

            <div className='col-12 mt-4 pd-3 border-top'>
              <BuscadorPokemon />
            </div>

            <div className='col-12'>
              <ResultadoPokemon />
            </div>

          </div>

        </div>
      </div>
    </Provider>
  );
}

export default App;
