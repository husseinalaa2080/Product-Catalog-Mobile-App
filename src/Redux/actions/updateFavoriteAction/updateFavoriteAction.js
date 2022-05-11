import axios from 'axios'
import { PRODUCT_LIST_URL } from '../../../API/base'
import {
    ADD_ELEMENT, 
    REMOVE_ELEMENT, 
    RESET_STATE,
    FAV_DATA,
    SET_FAV_NUM
} from '../../shared/updateFavorite'

export const incrementFav = () => {
    return {
      type: ADD_ELEMENT,
    };
  };
  
export const decrementFav = () => {
  return {
    type: REMOVE_ELEMENT,
  };
};

export const resetFav = () => {
  return {
    type: RESET_STATE,
  };
};

export const setNum = (num) => {
  return {
    type: RESET_STATE,
    data : num
  };
};

export const setFavData = (data) => {
  return {
    type : FAV_DATA,
    data : data
  }
}