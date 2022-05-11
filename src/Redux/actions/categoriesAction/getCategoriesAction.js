import axios from 'axios'
import { CATEGORIES_URL } from '../../../API/base'
import {
    GET_CATEGORIES_ATTEMPT, 
    GET_CATEGORIES_SUCCESS, 
    GET_CATEGORIES_FAIL
} from '../../shared/categories'

export const getCategoriesAction = () => {
    return async dispatch => {
        dispatch({type : GET_CATEGORIES_ATTEMPT})
        try {
            var config ={
                method : 'GET', 
                url : CATEGORIES_URL,
            }
            let response = await axios(config)
            if (response.data) {
                dispatch({
                    type : GET_CATEGORIES_SUCCESS, 
                    data : response.data})
            }
        } catch (error) {
            console.log(error);
            dispatch({type : GET_CATEGORIES_FAIL, data : error.response.data})
        }
    }
}

