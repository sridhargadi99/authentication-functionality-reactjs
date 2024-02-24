// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button
      type="button"
      className="logout-button-style"
      onClick={logoutButton}
    >
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
