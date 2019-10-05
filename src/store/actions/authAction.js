import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as Types from './types';

export const register = (user, history) => dispatch => {
  Axios.post('/api/users/register', user)
    .then(res => {
      console.log(res);
      dispatch({
        type: Types.USERS_ERROR,
        payload: { error: {} }
      })
      history.push('/login');
    })
    .catch(err => {
      console.log(err);
      dispatch({ 
        type: Types.USERS_ERROR,
        payload: {
          error: err.response.data
        }
      })
    })
}

export const login = (user, history) => dispatch => {
  Axios.post('/api/users/login', user)
    .then(res => {
      const token = res.data.token; 
      localStorage.setItem('authToken', token)
      let decode = jwtDecode(token);
      console.log(decode);
      
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode
        }
      })
      history.push('/');
    })
    .catch(err => {
      dispatch({ 
        type: Types.USERS_ERROR,
        payload: {
          error: err.response.data
        }
      })
    })

}

export const logout = history => {
  localStorage.removeItem('authToken')
  history.push('/login')
  return {
      type: Types.SET_USER,
      payload: {
          user: {}
      }
  }
}