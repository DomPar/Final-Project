import './NewPost.css'
import {createPost} from '../../services/postService.js'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UploadWidget from '../../componentes/UploadWidget/UploadWidget.jsx'


function NewPost() {
    const navigate = useNavigate()
    
    const[title, setTitle]= useState('')
    const[description, setDescription]= useState('')
    const[media, setMedia] = useState('')
    
    const create = async () => {
    const sendPost = await createPost({media, title, description})
    navigate('/app')
}
  return (
    <div id="new-post-container">
      <div id='newpostcontainer'>
          <div>
            <div id="media-container">
              <img id='media' src={media} alt="My Photo"/>
            </div>
            <div id="add-picture-container">
              <div id="add-picture-button">
                <UploadWidget id='add-picture-button' setter={setMedia}/>
              </div>
            </div>
          </div>

          <div id="right-section">
            <textarea 
              name="ADD TITLE" 
              id="titledescription" 
              placeholder='Añadir título...' 
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
              name="POST'S DESCRIPTION" 
              id="textdescription" 
              placeholder='Añadir descripción...' 
              onChange={(e) => setDescription(e.target.value)}
            />
            <div id="share-container">
              <button id='share' onClick={create}>Publicar</button>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default NewPost
