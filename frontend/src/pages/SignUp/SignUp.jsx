import { Link } from "react-router-dom"
import './SignUp.css'
import SignUpCard from "../../componentes/SignUpForm/SignUpForm"


const SignUp = () => {

  return (
    <div id="signup-container">
      <div id="signup-left"></div>
      <div id="signup-right"><SignUpCard/></div>
    </div>
  )
}

export default SignUp