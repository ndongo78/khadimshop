import * as api from '../../api'

//create favorite
export const addFavorite=(id,token)=>async(dispatch)=>{

       await api.addFavorite(id,token)
       .then(response=>{
              if(response.data.error){
                  dispatch({
                      type:'ADD_FAVORITE_ERROR',
                      payload:response.data.error
                  })

              }else{
                dispatch({
                    type:'ADD_FAVORITE',
                    payload:response.data
                  })
              }
       })
       .catch(error=>{
             dispatch({
                type:'ERROR',
                payload:error.response.data
             })
         })

    
}
//get favorite
export const getFavorite=(token)=>async(dispatch)=>{
    try {
        const {data}=await api.getFavorite(token)
        dispatch({
            type:'GET_FAVORITE',
            payload: data
        })
    } catch (error) {
         console.log(error)
    }
}
//delete favorite
export const deleteFavorite=(id,token)=>async(dispatch)=>{
    try {
        await api.deleteFavorite(id,token)
        dispatch({
            type:'DELETE_FAVORITE',
            payload: id
        })
    } catch (error) {
         console.log(error)
    }
}