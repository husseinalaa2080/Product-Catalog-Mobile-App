import {
    GET_PRODUCT_LIST_ATTEMPT, 
    GET_PRODUCT_LIST_SUCCESS, 
    GET_PRODUCT_LIST_FAIL
} from '../../shared/ProductList'

const INITIAL_STATE = {
    loading : false,
    success : [],
    fail : []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST_ATTEMPT:
            return {
                ...state,
                loading : true,
                success : [],
                fail : false
            }
        case GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading : false,
                success : action.data,
                fail : false
            }
        case GET_PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading : false,
                success : [],
                fail : true
            } 
        default:
            return state
    }
}