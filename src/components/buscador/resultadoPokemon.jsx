import React from 'react';
import { useSelector } from 'react-redux';
import helpers from '../../helper/helper';

const ResultadoPokemon = () => {

   const buscador = useSelector((state) => state.buscador);
   let getPokemon = buscador.pokemon[0];

   return (
      <>
         <h3 className="text-white mt-4">Result: </h3>
         <div className='card mb-3 p-1'>
            <div className='row no-gutters'>
               {!buscador.loading && <div className="text-warning">Searching...</div>}
               {buscador.pokemon.length > 0 &&
                  <>
                     <div className="col-sm-5 col-12" style={{borderRight: '1px solid #ddd'}}>
                        <img src={getPokemon.sprites.front_default} className='card-img' alt="Pokemon" />
                     </div>
                     <div className='col-sm-7 col-12'>
                        <div className="card-body pb-5">
                           <h2 className="card-title border-end">{helpers.capitalizeFirtsLetter(getPokemon.name)}</h2>
                           <h4 className='card-subtitle h5 mt-3'>Abilities:</h4>
                           <ul className='list-group mt-3'>
                              {
                                 getPokemon.abilities && getPokemon.abilities.map((ability, key) => {
                                    return <li key={key} className='list-group-item'>{ability.ability.name}</li>
                                 })
                              }
                           </ul>
                        </div>
                     </div>
                  </>
               }
               {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
            </div>
         </div>
      </>
   )
};

export default ResultadoPokemon;