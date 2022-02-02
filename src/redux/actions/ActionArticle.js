import * as api from '../../api'


export const postArticles=(values,token)=>async(dispatch)=>{
      try {
          const response=await api.postArticle(values,token);
          dispatch({
              type:"CREATE_ARTICLE",
              payload:response.data
          })
      
      } catch (error) {
          console.log(error.response.errors)
      }

}
  //fetch data all 
  export const getAllArticle=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllArticles()
        dispatch({
            type:'GET_ALL_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}
//fetch data New

export const getNewArticle=()=>async(dispatch)=>{
    try {
        const {data}=await api.getArticles()
        dispatch({
            type:'GET_NEW_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}


export const getArticle=()=>async(dispatch)=>{
    try {
        const {data}=await api.getArticles()
        dispatch({
            type:'GET_TENDANCE_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}
//get by id
export const getDetailArticle=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getArticleById(id)
        dispatch({
            type:'GET_ARTICLE_BY_ID',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

//popular

export const getArticlePopular=()=>async(dispatch)=>{
    try {
        const {data}=await api.getArticlePopular()
        dispatch({
            type:'GET_POPULAR_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}
//Noted

export const getArticleNoted=()=>async(dispatch)=>{
    try {
        const {data}=await api.getArticleNoted()
        dispatch({
            type:'GET_NOTED_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}
//delete 

export const deleteArticle=(id,token)=>async(dispatch)=>{
    try {
         await api.deleteArticle(id,token)
         dispatch({
             type:"DELETE_ARTICLE",
             payload:id
         })
    } catch (error) {
        console.log(error.response)
    }
}
//update article 

export const updateArticle=(id,values,token)=>async(dispatch)=>{
     try {
        await api.updateArticle(id,values,token)
         dispatch({
             type:"UPDATE_ARTICLE",
             payload: id
         })
     } catch (error) {
          console.log(error)
     }
}

export const getArticleFor=()=>async(dispatch)=>{
    try {
        const {data}=await api.getArticleCarousel()
        dispatch({
            type:'GET_FOR_ARTICLES',
            payload:data
        })
    } catch (error) {
        
    }
}

export const getElementId=(id)=>async(dispatch)=>{
    try {
        const response =await api.getArticleById(id)
        dispatch({
            type:'GET_ARTICLE_BY_ID',
            payload:response.data
        })
    } catch (error) {
        console.log(error.response)
    }
}