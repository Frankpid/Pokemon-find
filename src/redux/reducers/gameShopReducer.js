import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopActions"

const default_game_shop = {
   pokemon: 20
}

const game_shop = (state = default_game_shop, action) => {
   switch(action.type){
      case BUY_POKEMON: {
         return {
            ...state,
            pokemon: state.pokemon > 1 ? state.pokemon - action.payload : 1
         }
      }
      case RETURN_POKEMON: {
         return {
            ...state,
            pokemon: state.pokemon < 40 ? state.pokemon + action.payload : 40
         }
      }
      default: return state
   }
}

export default game_shop