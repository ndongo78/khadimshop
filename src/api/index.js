import axios from 'axios'
const url='https://backendkashop.herokuapp.com/'
//const url='http://localhost:3001/'
//users
export const postUser=user=>axios.post(url+'users/register',user)
export const loginUser=user=>axios.post(url+'users/login',user)
export const userUpdate=(id,values)=>axios.put(url+`users/${id}`,values)
export const resetPass=({email})=>axios.patch(url+'users/resetPassword/',{email})
export const changePassword=(password,id)=>axios.put(url+`users/changerPassword/${id}`,password)
//categorie c
export const getCategories=()=>axios.get(url+'category')
export const postCategory=values=>axios.post(url+'category/create',values)

//article
export const getElement=(id)=>axios.get(url+`article/${id}`)
export const postArticle=values=>axios.post(url+'article/create',values)
export const getAllArticles=()=>axios.get(url+'article')
export const getArticles=()=>axios.get(url+'article/nouveau')
export const getArticlePopular=()=>axios.get(url+'article/popular')
export const getArticleNoted=()=>axios.get(url+'article/noted')
export const deleteArticle=(id)=>axios.delete(url+`article/delete/${id}`)
export const updateArticle=(id,values)=>axios.put(url+`article/update/${id}`,values)
export const getArticleCarousel=()=>axios.get(url+'article/carousel')

//commandes
export const allCommandes=()=>axios.get(url+'commande/')
export const getLastCommande=(id)=>axios.get(url+`commande/last/${id}`)