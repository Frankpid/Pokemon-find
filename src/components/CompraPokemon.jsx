import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopActions';

const CompraPokemon = () => {

   const dispatch = useDispatch();

   return (
      <div className='mt-3 pb-4'>
         <button className="btn btn-dark btn-sm mb-2" onClick={() => dispatch(buy_pokemon_action(1))}>Buy Pokemon</button> <br />
         <button className="btn btn-dark btn-sm" onClick={() => dispatch(return_pokemon_action(1))}>Return Pokemon</button>
      </div>
   )
}

export default CompraPokemon;