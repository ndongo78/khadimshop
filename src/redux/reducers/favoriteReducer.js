

const initialState = {
    favorite: [],
    isFavorite: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FAVORITE':
            return {
                ...state,
                favorite: action.payload,
                
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorite: [...state.favorite, action.payload],
                isFavorite: true
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                favorite: state.favorite.filter(item => item.id !== action.payload)
            }
        case 'ADD_FAVORITE_ERROR':
            return {
                ...state,
                error: action.payload
            }
            
        default:
            return state
    }
}