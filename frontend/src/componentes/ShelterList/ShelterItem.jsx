import './ShelterList.css'
import { Link, useNavigate } from 'react-router-dom'

const ShelterItem = ({image , name, shelterId}) => {
  const navigate = useNavigate()
  return (
    <div id="shelter">
      <div id="shelter-profile" style={{backgroundImage: `url(${image})`}}>
      </div>
      <div id="shelter-list-info">
      <h1>{name}</h1>
      <button id='go-shelter-button' onClick={()=>{navigate(`/app/shelter/${shelterId}`)}}>Go to shelter</button>
      </div>
    </div>
  )
}

export default ShelterItem