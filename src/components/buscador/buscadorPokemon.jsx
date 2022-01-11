import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';
import helpers from '../../helper/helper';

const BuscardorPokemon = () => {

   const dispatch = useDispatch();
   const [pokemonName, setPokemonName] = useState('pikachu');

   const searchPokemon = (e) => {
      dispatch(fetchPokemon(pokemonName));
      e.preventDefault();
   }

   useEffect(() => {
      // document.getElementsByTagName('form')[0].submit();
      dispatch(fetchPokemon(pokemonName));
   }, []);

   return (
      <form className="form-group" onSubmit={searchPokemon}>
         <label htmlFor='buscar_pokemon' className='text-white py-2'>Search Pokemon</label>
         <input type='text' className='form-control' id='buscar_pokemon' 
            value={pokemonName} 
            onInput={(event) => event.target.value = setPokemonName(helpers.normalizeText(event))}
         />
         <button type='submit' className='btn btn-primary mt-3'>Send</button>
      </form>
   )
};

export default BuscardorPokemon;