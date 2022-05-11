import {
    ADD_ELEMENT, 
    REMOVE_ELEMENT, 
    RESET_STATE,
    SET_FAV_NUM,
    FAV_DATA,
} from '../../shared/updateFavorite'

const INITAIL_STATE = {
    favoriteCount : 0,
    favData : []
}

export default (state=INITAIL_STATE , action) => {
    switch (action.type) {
      case ADD_ELEMENT:
        return {
            favoriteCount : state.favoriteCount + 1
        }
      case REMOVE_ELEMENT:
        return {
            favoriteCount : state.favoriteCount - 1
        }
      case SET_FAV_NUM:
          return {
              favoriteCount : action.data
          }
      case RESET_STATE:
          return {
              favoriteCount : 0
          }
      case FAV_DATA:
        return {
          ...state,
          favoriteCount : state.favoriteCount,
          favData : action.data
        }
      default:
        return state;
    }
  };