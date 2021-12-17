export default (state={articles:[],cart:[],newArticles:[],updatedArticle:[], total:0,detail:[],success:null},action)=>{
     switch (action.type) {
         
         case "CREATE_ARTICLE":
             return {
                 ...state,
                 articles:[action.payload]
             }
            
        case 'GET_TENDANCE_ARTICLES':
            return{
                ...state,
                articles:[...action.payload]
            } 
       case "GET_ALL_ARTICLES":
           return{
               ...state,
               articles:[...action.payload]
           } 
      case 'GET_ARTICLE_BY_ID':
            return{
                ...state,
                detail:[action.payload]
            }

       case 'GET_POPULAR_ARTICLES':
        return{
            ...state,
            articles:[...action.payload]
              }
           case 'GET_NOTED_ARTICLES':
            return{
                ...state,
                articles:[...action.payload]
                  }
            case 'GET_NEW_ARTICLES':
                return{
                    ...state,
                    newArticles:[...action.payload]
                }
                case "GET_ELEMENT":
                    return{
                        state,
                        updatedArticle:[...action.payload]
                    }
              
               case "DELETE_ARTICLE":
                   const item= state.articles.find(item=>item.id === action.payload)
                   if(item){
                       const removedItem=state.articles.filter(item=>item.id !==action.payload)
                       return{
                           ...state,
                           articles: removedItem
                       }
                   }
                   break;
                    case "UPDATE_ARTICLE":
                    const items= state.articles.find(item=>item.id === action.payload)
                    if(items){
                        return {
                            ...state,
                            articles:items
                        }
                    }
                
                //cart
                case "ADD_TO_CART":
                    let addedItem=state.articles.find(item=>item.id === action.payload)

                    let isExist=state.cart.find(item=>item.id === action.payload)
                    if(isExist){
                        addedItem.qty +=1
                        return {
                            ...state,
                             cart:[...state.cart.filter(item=>item.id !== action.payload),addedItem],
                            total: state.total + addedItem.price
                        }
                    }else{
                       addedItem.qty =1;
                        return {
                         ...state,
                         cart:[...state.cart,addedItem],
                         total:state.total + addedItem.price
                     } 
                    }
                    case "ADD_MORE_ITEMS":
                        let addMore=state.articles.find(item=>item.id === action.payload)
                        if(addMore){
                            addMore.qty +=1
                            return {
                                ...state,
                                total:state.total + addMore.price
                            }
                        }
                        break;
                        case "REMOVE_ITEMS":
                            let removed=state.articles.find(item=>item.id === action.payload)
                 if(removed.qty ===1){
                    let products= state.cart.filter(item=>item.id !== action.payload)
                     return {
                         ...state,
                         cart: products,
                         total: state.total - removed.price
                     }
                 }else{
                    removed.qty-=1;
                     return {
                         ...state,
                         total: state.total - removed.price
                         
                     }
                 }
                 case "DELETE_ITEM_CAR":
                 let itemToRemove=state.cart.filter(item=>item.id !== action.payload)
                 let addedItems=state.articles.find(item=>item.id === action.payload)
                 return{
                     ...state,
                     cart:itemToRemove,
                     total:state.total - (addedItems.price * addedItems.qty)
                 }
                    
         default:
             return state;
     }
}

