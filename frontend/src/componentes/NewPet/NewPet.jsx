import './NewPet.css'
import {createPetWithShelter} from '../../services/petService.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UploadWidget from '../UploadWidget/UploadWidget.jsx'


function NewPet() {
    const navigate = useNavigate()
    const[name, setName] = useState('')
    const[media, setMedia] = useState('')
    const[age, setAge]= useState('')
    const[description, setDescription]= useState('')
    const[preferences, setPreferences]= useState('')
    const[species, setSpecies]= useState('')

    
    const createPet = async () => {
    const sendPet = await createPetWithShelter({media: media, description: description, name:name, age:age, preferences:preferences, species: species})
    navigate(`/app/shelterownprofile/${localStorage.getItem("id")}`)
}
  return (
    <div id="new-pet-container">
      <div id='newpetcontainer'>
          <div>
            <div id="media-container">
              <img id='media' src={media} alt="Pet's Picture"/>
            </div>
            <div id="add-picture-container">
              <div id="add-picture-button">
                <UploadWidget setter={setMedia}/>
              </div>
            </div>
          </div>

          <div id="right-section">
            <input 
              type="text"
              id="petname" 
              placeholder="Nombre mascota..." 
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="text"
              id="petspecies" 
              placeholder="Especie..." 
              onChange={(e) => setSpecies(e.target.value)}
            />
            <input 
              type="number" 
              min={0}
              id="petage" 
              placeholder="Edad..." 
              onChange={(e) => setAge(e.target.value)}
            />
            <textarea 
              id="petdescription" 
              placeholder="Descripción..." 
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea 
              id="petpreferences" 
              placeholder="Características..." 
              onChange={(e) => setPreferences(e.target.value)}
            />
            <div id="share-container">
              <button id='share' onClick={createPet}>Añadir Mascota</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewPet
