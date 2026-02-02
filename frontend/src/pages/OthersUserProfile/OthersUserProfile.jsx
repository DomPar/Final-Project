import { Link } from 'react-router-dom'
import './OthersUserProfile.css'
import StandardImageList from '../../componentes/SquarePictures/SquarePicture'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'

function OthersUserProfile() {
  return (
  
    <div id='other-profile-container' >
      <div id='others-square-pictures'>
        <StandardImageList/>
      </div>

      <div id='others-profile-card'>
      <div id="others-profile-avatar">
        </div>
        <p id='others-description'>Description soy bla bla bla etc etc etc bfjkb. vmfv afdn.mf dfdfmnbknd vkjbvkbf,d vnf.vnv  vk.naev jnv.a v</p>
        <button id='follow'>Follow</button>
      </div>
    </div>
    
  )
}
export default OthersUserProfile