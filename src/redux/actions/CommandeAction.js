import * as api from '../../api'

export const getAllCommandes=(token)=>async(dispatch)=>{
    try {
        const {data}=await api.allCommandes(token)
        dispatch({
            type:'GET_ALL_COMMANDES',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}


export const getLast=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getLastCommande(id)
        dispatch({
            type:'GET_LAST_COMMANDE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}