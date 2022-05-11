import axios from 'axios'
import { PRODUCT_LIST_URL } from '../../../API/base'
import {
    GET_PRODUCT_LIST_ATTEMPT, 
    GET_PRODUCT_LIST_SUCCESS, 
    GET_PRODUCT_LIST_FAIL
} from '../../shared/ProductList'

export const getProductListAction = () => {
    return async dispatch => {
        dispatch({type : GET_PRODUCT_LIST_ATTEMPT})
        try {
            var config ={
                method : 'GET', 
                url : PRODUCT_LIST_URL,
            }
            let response = await axios(config)
            if (response.data) {
                dispatch({
                    type : GET_PRODUCT_LIST_SUCCESS, 
                    data : response.data})
            }
        } catch (error) {
            console.log(error);
            dispatch({type : GET_PRODUCT_LIST_FAIL, data : error.response.data})
        }
    }
}

