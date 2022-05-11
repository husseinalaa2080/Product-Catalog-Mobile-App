import {
    GET_CATEGORIES_ATTEMPT, 
    GET_CATEGORIES_SUCCESS, 
    GET_CATEGORIES_FAIL
} from '../../shared/categories'

const INITIAL_STATE = {
    loading : false,
    success : [],
    fail : []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES_ATTEMPT:
            return {
                ...state,
                loading : true,
                success : [],
                fail : false
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading : false,
                success : action.data,
                fail : false
            }
        case GET_CATEGORIES_FAIL:
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