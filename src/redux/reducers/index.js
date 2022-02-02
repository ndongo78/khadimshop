import { combineReducers} from 'redux'
import user from './ReducerUser'
import categorie from './ReducerCategory'
import article from './ReducerArticle'
import newArticle from './ReducerNewArticle'
import cart from '../reducers/ReducerCart'
import commande from '../reducers/ReducerCommande'
import favorite from './favoriteReducer'

export default combineReducers({
    user,
    categorie,
    article,
    newArticle,
    cart,
    commande,
    favorite
})