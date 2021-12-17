import * as api from '../../api';
import jwtDecode from 'jwt-decode';
import { LOGIN_USER ,LOGIN_ERROR, LOGOUT,GET_TOKEN,UPDATE_USER,REGISTER_USER,REGISTER_ERROR,LOGIN_ADMIN} from '../constants';

//create user
export  const postUser=(user)=>async(dispatch)=>{
   
    try {
        const response=await api.postUser(user) 
        if(response.status===201){
            dispatch({
                type:REGISTER_USER,
                payload:response.data.message
            })
        }
        //   if(data.error){
        //       dispatch({
        //         type:"ERROR_REGISTER",
        //         payload:data.error
        //       })
        //   }
        // dispatch({
        //     type:"REGISTER_USER",
        //     payload: data
        // })
       
    } catch (error) {
        //console.log(error.response.data.errors)
        if(error.response.status===400){
            dispatch({
                type:REGISTER_ERROR,
                payload:error.response.data.errors[0].message
            })
        }
    }
}
//login user
export const loginUser=(values)=>async(dispatch)=>{
    try {
        const response=await api.loginUser(values)
        const {user}=jwtDecode(response.data.token)
        dispatch({
            type:GET_TOKEN,
            payload:response.data.token
        })
            if(user.role==='admin'){
                dispatch({
                    type:LOGIN_ADMIN,
                    payload:user
                })
                
            }
             if(user.role === 'client'){
                dispatch({
                    type:LOGIN_USER,
                    payload:user
                })

           
        }
       
        
    //     if(response.data.user){
           
    //         dispatch({
    //         type:"LOGIN_USER",
    //         payload:response.data.user
    //         })  
    //     }
    //     if(response.data.user){
    //          if(response.data.user.role === 'admin'){
    //          dispatch({
    //            type: 'LOGIN_ADMIN',
    //            payload:response.data.user.role
    //        })
    //         }
    //         if(response.data.user.role === 'client'){
    //             dispatch({
    //             type: 'LOGIN_ADMIN',
    //             payload:response.data.user.role
    //         })
    //     }
    //     }else{
    //     if(response.data.error){
    //        dispatch({
    //            type:"LOGIN_ERROR",
    //            payload:response.data.error
    //        })
    //    } 
    //     }
      
    } catch (error) {
        if(error.response){
            dispatch({
                type:LOGIN_ERROR,
                payload:error.response.data
            })
        }
        
    }
}
export const logOut=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT
    })
}

export const updateUser=(id,values,token)=>async(dispatch)=>{
     try {
         const {data}= await api.userUpdate(id,values,token)
         dispatch({
             type:UPDATE_USER,
             payload: data
         })
     } catch (error) {
         console.log(error)
     }
}

export const resetPassword=({email})=>async(dispatch)=>{
    try {
         const response=await api.resetPass({email}) 
         dispatch({
             type:"RESET_PASSWORD",
             payload: response.data
         })
    } catch (error) {
         console.log(error.response)
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