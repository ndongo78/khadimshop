
export default (categories=[],action)=>{
    switch (action.type) {
        case "POST_CATEGORIE":
            return [...categories,action.payload]
            
        case "FETCH_CATEGORIES":
            return action.payload
            
    
        default:
            return categories;
    }
}