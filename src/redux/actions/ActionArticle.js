import * as api from '../../api'


export const postArticles=(values)=>async(dispatch)=>{
      try {
          const {data}=await api.postArticle(values);
          dispatch({
              type:"CREATE_ARTICLE",
              payload:data
          })
      
      } catch (error) {
          console.log(error)
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

export const deleteArticle=(id)=>async(dispatch)=>{
    try {
         await api.deleteArticle(id)
         dispatch({
             type:"DELETE_ARTICLE",
             payload:id
         })
    } catch (error) {
        console.log(error)
    }
}
//update article 

export const updateArticle=(id,values)=>async(dispatch)=>{
     try {
        await api.updateArticle(id,values)
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