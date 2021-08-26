export default (NewArticles=[],action)=>{
    switch (action.type) {
        case 'GET_FOR_ARTICLES':
             return action.payload
            case 'GET_NEW_ARTICLES':
        return [action.payload];
        
        default:
            return NewArticles;
    }
}