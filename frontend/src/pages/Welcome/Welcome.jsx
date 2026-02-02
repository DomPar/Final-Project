import { Link } from "react-router-dom"
import LoginCard from "../../componentes/LoginForm/LoginForm"
import './Welcome.css'


const Welcome = () => {
  return (
    <div id="welcome-container">
      <div id="welcome-left"></div>
      <div id="welcome-right">
        <LoginCard/>
        </div>
    </div>
  )
}
export default Welcome