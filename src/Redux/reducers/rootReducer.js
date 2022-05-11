import {combineReducers} from 'redux';
import CategoriesReducer from './CategoriesReducer/CategoriesReducer'
import FavoriteReduer from './FavoriteReduer/FavoriteReduer';
import ProductListReducer from './ProductListReducer/ProductListReducer';

const rootReducer = combineReducers({
    categories : CategoriesReducer,
    productList : ProductListReducer,
    favCounter : FavoriteReduer
})

export default rootReducer