import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function (state = { open:false }, action) {
    switch (action.type) {
       
        case AUTH_USER:
        
            return {
                ...state,
                authenticated: true,
                open: false,
                error:""
            }
        case UNAUTH_USER:
        console.log(action.type)
            return {
                ...state,
                unauthenticated: false,
                open: false,
                error:""
            }
            case AUTH_ERROR:
            
            return {
                ...state,
                error: action.payload,
                open: true
            } 
          
    }
    return state;
}