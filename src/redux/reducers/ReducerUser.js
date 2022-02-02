import { GET_TOKEN, LOGIN_ERROR, LOGIN_USER, LOGOUT ,UPDATE_USER ,REGISTER_ERROR, REGISTER_USER ,LOGIN_ADMIN,ALL_USERS,
    ALL_USERS_ERROR,DELETE_USER,UPDATE_USER_ADMIN,UPDATE_USER_ADMIN_ERROR,DELETE_USER_ERROR 
} from "../constants"
const initialState={
    user: [],
    isLogin:false,
    logginError: null,
    registerSuccess:null,
    registetError:null,
    token:null,
    isAdmin:false,
    isUser:false,
    allUsers:[],
    userToUpdate:null,
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
                        case ALL_USERS:
                            return{
                                ...state,
                                allUsers:action.payload
                            }
                        case UPDATE_USER_ADMIN:
                            return{
                                ...state,
                                allUsers:[...action.payload]
                            }
                        case DELETE_USER:
                            const item= state.allUsers.find(item=>item.id === action.payload)
                            if(item){
                                const removedItem=state.allUsers.filter(item=>item.id !==action.payload)
                                return{
                                    ...state,
                                    userToUpdate: removedItem
                                }
                            }
                            break;
                            case "DELETE_USER_ERROR":
                                return{
                                    ...state,
                                    allUsers:action.payload
                                }
                            case 'GET_USER_BY_ID': 
                                return{
                                    ...state,
                                    userToUpdate:action.payload
                                }
                                break  

                        

             
         
        default:
            return state;
    }
}
