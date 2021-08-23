

export default (state={articles:[]},action)=>{
    switch (action.type) {
        case 'GET_FOR_ARTICLES':
            return{
                ...state,
                articles:[...action.payload]
                  }
        default:
            return state;
    }
}