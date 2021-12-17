import * as api from '../../api'



export const getCategorie=()=>async(dispatch)=>{
    try {
        const {data}= await api.getCategories()
        
        dispatch({
            type:"FETCH_CATEGORIES",
            payload:data
        })
    } catch (error) {
        
    }
}
//action post
export const postCategory=(values,token)=>async(dispatch)=>{
       try {
           const response=await api.postCategory(values,token)
           dispatch({
               type:"POST_CATEGORIE",
               payload:response.data
           })
       } catch (error) {
           console.log(error.response.errors)
       }
}