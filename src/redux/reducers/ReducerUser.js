import { GET_TOKEN, LOGIN_ERROR, LOGIN_USER, LOGOUT ,UPDATE_USER ,REGISTER_ERROR, REGISTER_USER ,LOGIN_ADMIN } from "../constants"
const initialState={
    user: [],
    isLogin:false,
    logginError: null,
    registerSuccess:null,
    registetError:null,
    token:null,
    isAdmin:false,
    isUser:false
  }

export default (state=initialState,action)=>{
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                registerSuccess:action.payload,
                isLogin: false
            }
            case REGISTER_ERROR:
                return{
                     ...state,
                     registetError: action.payload,
                     isLogin:false
                      }
            case GET_TOKEN:
                return{
                    ...state,
                    token:action.payload,
                }
            case LOGIN_USER :
                return{
                    ...state,
                   user:[action.payload],
                    isUser:true,
                    isLogin:true,
                }
            case LOGIN_ADMIN :
                return{
                    ...state,
                    user:[action.payload],
                    isAdmin:true,
                    isLogin:true,
                    isUser:false
                }
                case LOGIN_ERROR :
                    return{
                        ...state,
                        logginError:action.payload,
                    }
                case LOGOUT:{
                    return{
                      isLogin:false,
                      user:[]
                    }
                } 
                case UPDATE_USER:
                    return {
                        ...state,
                        user:[action.payload]
                    }
                    case "RESET_PASSWORD":
                        return{
                            ...state,
                            registerSuccess: action.payload
                        }
                        case "NEW_PASSWORD":
                            return{
                                ...state,
                                registerSuccess: action.payload
                            }
             
         
        default:
            return state;
    }
}
