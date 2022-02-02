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
           console.log(error)
       }
}
//update categorie
export const updateCategory=(id,values,token)=>async(dispatch)=>{
    try {
        const response=await api.updateCategory(id,values,token)
        dispatch({
            type:"UPDATE_CATEGORIE",
            payload:response.data
        })
    } catch (error) {
        console.log(error)
    }
}
//delete categorie
export const deleteCategory=(id,token)=>async(dispatch)=>{
    try {
        const response=await api.deleteCategory(id,token)
        dispatch({
            type:"DELETE_CATEGORIE",
            payload:response.data
        })
    } catch (error) {
        console.log(error)
    }
}
//get categorie by id
export const getCategoryById=(id)=>async(dispatch)=>{
    try {
        const {data}= await api.getCategoryById(id)
        console.log(data);
        dispatch({
            type:"FETCH_CATEGORIE_BY_ID",
            payload:data
        })
    } catch (error) {
        
    }
}
//get categorie by id