
export const addToCart=(data)=>(dispatch)=>{
       dispatch({
           type:"ADD_TO_CART",
           payload:data
       })
}
export const addCartItems=(id)=>(dispatch)=>{
    dispatch({
        type:"ADD_MORE_ITEMS",
        payload: id
    })
}

export const removeItem=(id)=>(dispatch)=>{
    dispatch({
        type:"REMOVE_ITEMS",
        payload: id
    })
}

export const deleteItem=(id)=>(dispatch)=>{
    dispatch({
        type:"DELETE_ITEM_CAR",
        payload:id
    })
}