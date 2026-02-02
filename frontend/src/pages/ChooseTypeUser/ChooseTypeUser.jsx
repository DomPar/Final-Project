import { Link } from "react-router-dom"
import "./ChooseTypeUser.css"
import ChooseUser from "../../componentes/ChooseUser/ChooseUser"


const ChooseTypeUser = () => {
  return (
    <div id="type-container">
      <div id="type-left"></div>
      <div id="type-right">
        <ChooseUser/>
        </div>
    </div>
  )
}
export default ChooseTypeUser