const initialState={
    user: [],
    isLogin:false,
    logginError: null,
    registerSuccess:null,
    registetError:null,
    role:null
  }

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                registerSuccess:action.payload,
                isLogin: false
            }
            case "ERROR_REGISTER":
                return{
                     ...state,
                     registetError: action.payload,
                     isLogin:false
                      }
            case "LOGIN_USER" :
                return{
                    ...state,
                   user:[action.payload],
                    isLogin:true
                }
            case 'LOGIN_ADMIN' :
                return{
                    ...state,
                    role:action.payload,
                }
                case 'LOGIN_ERROR' :
                    return{
                        ...state,
                        logginError:action.payload,
                    }
                case "LOGOUT":{
                    return{
                      isLogin:false,
                      user:[]
                    }
                } 
                case "UPDATE_USER":
                    return {
                        ...state,
                        user:[action.payload]
                    }
         
        default:
            return state;
    }
}
