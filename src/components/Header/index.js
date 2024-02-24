// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <ul className="list-container">
      <li className="link-style">
        <Link to="/">Home</Link>
      </li>
      <li className="link-style">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </>
)

export default Header
