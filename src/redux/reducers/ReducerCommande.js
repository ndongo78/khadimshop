export default (state={commandes:[]},action)=>{
    switch (action.type) {

        case 'GET_ALL_COMMANDES':
            return{
                ...state,
                commandes:[...action.payload]
            }
        
        case 'GET_LAST_COMMANDE':
            return {
                ...state,
                commandes:[...action.payload]
            }    
        default:
            return state;
    }
}

