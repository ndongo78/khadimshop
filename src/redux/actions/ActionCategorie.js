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
export const postCategory=(values)=>async(dispatch)=>{
       try {
           const {data}=await api.postCategory(values)
           dispatch({
               type:"POST_CATEGORIE",
               payload:data
           })
       } catch (error) {
           console.log(error)
       }
}