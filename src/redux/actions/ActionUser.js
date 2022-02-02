import * as api from '../../api';
import jwtDecode from 'jwt-decode';
import { LOGIN_USER ,LOGIN_ERROR, LOGOUT,GET_TOKEN,UPDATE_USER,REGISTER_USER,REGISTER_ERROR,LOGIN_ADMIN,ALL_USERS,
    ALL_USERS_ERROR ,UPDATE_USER_ADMIN
} from '../constants';

//get all users
export const getAllUsers = (token) => async dispatch => {
    try {
        const response = await api.getAllUsers(token);
        dispatch({
            type: ALL_USERS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: ALL_USERS_ERROR,
            payload: error.response.data.error
        });
    }
};
//update user by admin
export const updateUserByAdmin = (id,user,token) => async dispatch => {
    try {
        const response = await api.updateUserByAdmin(id,user,token);
        dispatch({
            type: UPDATE_USER_ADMIN,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_ERROR",
            payload: error.response.data.error
        });
    }
};
//delete user by admin
export const deleteUserByAdmin = (id,token) => async dispatch => {
    try {
        const response = await api.deleteUserByAdmin(id,token);
        dispatch({
            type: "DELETE_USER",
            payload: response.data
        });
    }
    catch (error) {
        dispatch({
            type: "DELETE_USER_ERROR",
            payload: error.response.data.error
        });
    }
};
//get user by id
export const getUserById = (id,token) => async dispatch => {
    try {
        const response = await api.getUserById(id,token);
        dispatch({
            type: "GET_USER_BY_ID",
            payload: response.data
        });
    }
    catch (error) {
        dispatch({
            type: "GET_USER_BY_ID_ERROR",
            payload: error.response.data.error
        });
    }
};

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