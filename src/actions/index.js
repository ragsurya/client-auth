import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = "http://localhost:3090";
export function signInUser({email, password}) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
             dispatch({ type : AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch(() => {
            dispatch(authError('Please check your credentials'));
        });
    };
}


export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}