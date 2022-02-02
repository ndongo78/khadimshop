
const initialState = {
    categories: [],
    categorieToUpdate:null
};
export default (state=initialState,action)=>{
    switch (action.type) {
        case "POST_CATEGORIE":
            return {
                ...state,
                categories:[...state.categories,action.payload]
            }
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories:[...action.payload]
            }
        case "UPDATE_CATEGORIE":
            const item= state.categories.find(item=>item.id === action.payload.id)
            if(item){
                const removedItem=state.categories.filter(item=>item.id !==action.payload.id)
                return{
                    ...state,
                    categories: [...removedItem,action.payload]
                }
            }
            break;
        case "DELETE_CATEGORIE":
            const items= state.categories.find(item=>item.id === action.payload)
            if(items){
                const removedItem=state.categories.filter(item=>item.id !==action.payload)
                return{
                    ...state,
                    categories: removedItem
                }
            }
            break;
        case "FETCH_CATEGORIE_BY_ID":
            return {
                ...state,
                categorieToUpdate:action.payload
            }

        default:
            return state;
    }
}
     