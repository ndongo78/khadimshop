export default (NewArticles=[],action)=>{
    switch (action.type) {
        case "CREATE_ARTICLE_S":
             return [...NewArticles,action.payload]
            case 'GET_NEW_ARTICLES':
        return action.payload;
        
        default:
            return NewArticles;
    }
}