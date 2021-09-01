import * as api from '../../api';


export  const postUser=(user)=>async(dispatch)=>{
   
    try {
        const {data}=await api.postUser(user) 
          if(data.error){
              dispatch({
                type:"ERROR_REGISTER",
                payload:data.error
              })
          }
        dispatch({
            type:"REGISTER_USER",
            payload: data
        })
       
    } catch (error) {
        console.log(error)
    }
}

export const loginUser=(values)=>async(dispatch)=>{
    try {
        const response=await api.loginUser(values)
        
        if(response.data.user){
           
            dispatch({
            type:"LOGIN_USER",
            payload:response.data.user
            })  
        }
        if(response.data.user){
             if(response.data.user.role === 'admin'){
             dispatch({
               type: 'LOGIN_ADMIN',
               payload:response.data.user.role
           })
            }
            if(response.data.user.role === 'client'){
                dispatch({
                type: 'LOGIN_ADMIN',
                payload:response.data.user.role
            })
        }
        }else{
        if(response.data.error){
           dispatch({
               type:"LOGIN_ERROR",
               payload:response.data.error
           })
       } 
        }
      
    } catch (error) {
        console.log(error)
    }
}
export const logOut=()=>(dispatch)=>{
    dispatch({
        type:'LOGOUT'
    })
}

export const updateUser=(id,values)=>async(dispatch)=>{
     try {
         const {data}= await api.userUpdate(id,values)
         dispatch({
             type:"UPDATE_USER",
             payload: data
         })
     } catch (error) {
         console.log(error)
     }
}

export const resetPassword=({email})=>async(dispatch)=>{
    try {
         const {data}=await api.resetPass({email}) 
         dispatch({
             type:"RESET_PASSWORD",
             payload: data
         })
    } catch (error) {
         console.log(error)
    }
}

export const changerPassword=(value,token)=>async(dispatch)=>{
    try {
        const {data}=await api.changePassword(value,token)
        dispatch({
            type: "NEW_PASSWORD",
            payload: data
        })
    } catch (error) {
         console.log(error)
    }
}