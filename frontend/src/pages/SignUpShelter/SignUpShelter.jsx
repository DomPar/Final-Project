import { Link } from "react-router-dom"
import './SignUpShelter.css'
import  SignUpSCard  from "../../componentes/SignUpFormShelter/SignUpFormShelter.jsx"



const SignUpShelter = () => {

  return (
    <div id="signupS-container">
      <div id="signupS-left"><SignUpSCard/></div>
      <div id="signupS-right"></div>
    </div>
  )
}

export default SignUpShelter