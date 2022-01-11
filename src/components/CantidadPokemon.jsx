import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemon = () => {
   // console.log(props);
   // const cantidad_pokemon = props.state.pokemon;
   const game_shop = useSelector((state) => state.game_shop);
   
   return (
      <>
         Units: {game_shop.pokemon}
      </>
   )
}

export default CantidadPokemon;