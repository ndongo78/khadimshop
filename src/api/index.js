import axios from 'axios'
const url='https://backendkashop.herokuapp.com/'
//const url='http://localhost:5000/'
//users debut
//create user
export const postUser=user=>axios.post(url+'users/register',user)
//login user
export const loginUser=user=>axios.post(url+'users/login',user)
//update user
export const userUpdate=(id,values,token)=>axios.put(url+`users/${id}`,values,{headers:{'Authorization':`Bearer ${token}`}})
//reset password
export const resetPass=({email})=>axios.patch(url+'users/resetPassword/',{email})
export const changePassword=(password,id)=>axios.put(url+`users/changerPassword/${id}`,password)
//fin user
//categorie c
export const getCategories=()=>axios.get(url+'category')
export const postCategory=(values,token)=>axios.post(url+'category/create',values,{headers:{'Authorization':`Bearer ${token}`}})

//article
export const getElement=(id)=>axios.get(url+`article/${id}`)
export const postArticle=(values,token)=>axios.post(url+'article/create',values,{headers:{'Authorization':`Bearer ${token}`}})
export const getAllArticles=()=>axios.get(url+'article')
export const getArticles=()=>axios.get(url+'article/nouveau')
export const getArticlePopular=()=>axios.get(url+'article/popular')
export const getArticleNoted=()=>axios.get(url+'article/noted')
export const deleteArticle=(id,token)=>axios.delete(url+`article/delete/${id}`,{headers:{'Authorization':`Bearer ${token}`}})
export const updateArticle=(id,values,token)=>axios.put(url+`article/update/${id}`,values,{headers:{"Authorization":`Bearer ${token}`}})
export const getArticleCarousel=()=>axios.get(url+'article/carousel')
export const getArticleById=(id)=>axios.get(url+`article/${id}`)

//commandes
export const allCommandes=()=>axios.get(url+'commande/')
export const getLastCommande=(id)=>axios.get(url+`commande/last/${id}`)
export const payerCommande=async(amount,id,cart,billingDetails,userid)=>await axios.post(url+`commande/payement`,{
    amount,
    id,
    cart,
    billingDetails,
    userid
})