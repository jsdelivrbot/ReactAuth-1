import axios from 'axios';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function (dispatch) {
    // Submit email password t oserver
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then(response => {
      // if request ok then:
      // -Update state to for auth'd user
      // dispatch({ type: AUTH_USER });
      // -save the JWT token
      localStorage.setItem('token', response.data.token)
      // -redirect to the correct route
      browserHistory.push('/feature');
    })
    .catch(() => {
      // if bad request
      // -show the error to the user
    })



  }
}
