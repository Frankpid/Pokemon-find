import { FETCH_POKEMON_ERROR, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/buscadorAction";

const initialState = {
   loading: false,
   pokemon: [],
   error: ''
}

const buscador = (state = initialState, action) => {
   switch(action.type) {
      case FETCH_POKEMON_REQUEST:
         return {
            ...state,
            loading: true
         }
      case FETCH_POKEMON_SUCCESS:
         return {
            ...state,
            pokemon: action.payload,
            error: '' 
         }
      case FETCH_POKEMON_ERROR:
         return {
            ...state,
            pokemon: [],
            error: action.payload
         }
      default: return state;
   }
}

export default buscador;