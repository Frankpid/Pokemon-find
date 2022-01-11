import Axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

// Actions
export const fetchPokemonRequest = () => {
   return {
      type: FETCH_POKEMON_REQUEST
   }
};

export const fetchPokemonSuccess = (Pokemon) => {
   return {
      type: FETCH_POKEMON_SUCCESS,
      payload: Pokemon
   }
};

export const fetchPokemonError = (error) => {
   return {
      type: FETCH_POKEMON_ERROR,
      payload: error
   }
};

const fetchPokemon = (valor) => {
   return (dispatch) => {
      dispatch(fetchPokemonRequest());
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
         .then(response => {
            dispatch(fetchPokemonSuccess([response.data]))
         })
         .catch(error => {
            dispatch(fetchPokemonError('Pokemon not found'));
         });
   }
};

export default fetchPokemon;