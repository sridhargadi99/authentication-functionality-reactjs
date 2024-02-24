// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  setLoginCredits = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    if (Cookies.get('jwt_Token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1 className="login-heading-style">Please Login</h1>
        <button
          type="button"
          className="login-button-style"
          onClick={this.setLoginCredits}
        >
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login
