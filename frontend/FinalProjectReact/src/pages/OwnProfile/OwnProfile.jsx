import { Link, useNavigate } from 'react-router-dom'
import './OwnProfile.css'
import { getOwnUser, updateUserAvatar } from '../../services/userService';
import { useState, useEffect } from 'react';
import { getAllPostsByUser } from '../../services/postService';
import { updateUserDescription } from '../../services/userService';
import UploadWidgetAvatar from '../../componentes/UploadWidgetAvatar/UploadWidgetAvatar';

function OwnProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [avatar, setAvatar] = useState(user.avatar) //Necesitamos una funcion para mandar esto al usuario
  const [update, setUpdate] = useState(false)

  const [showTextBox, setShowTextBox] = useState(false)
  const [description, setDescription] = useState('')



  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleButtonClick = () => {
    setShowTextBox(!showTextBox)
  }

  useEffect(() => {
    const getProfile = async () => {
      const {result} = await getOwnUser(localStorage.getItem('email'))
        setUser(result)
      }
      getProfile()
  }, [update])

  useEffect(() => {
    const getPosts = async () => {
      const {result} = await getAllPostsByUser(user.id, user.name)
      setPosts(result)
    }
    getPosts()
  }, [user]);

  const displayPosts = () => {
    const result = posts.map((post) => {
      return (
        <div className="imagepost" style={{backgroundImage:`url(${post.media})`}} onClick={() => {navigate(`/app/viewpost/${post.id}`)}}></div>
        )
      })
      return result;
    }
    
  useEffect(() => {
    sendAvatar()
  }, [avatar]);

  const sendDescription = async (e) => {
    e.preventDefault()
    const {result} = await updateUserDescription({description})
    setUpdate(!update)
    setShowTextBox(false)
    return result;
  }

  const sendAvatar = async (e) => {
    const result = await updateUserAvatar({avatar})
    setUpdate(!update)
    return result;
  }
  
  return (
    <div id='profile-container' >
      <div id='square-pictures'>
        <button onClick={() => {navigate('/app/newpost')}} id='new-post-button'>New Post 🐾</button>
        <div id="post-pictures">
          {displayPosts()}
        </div>
      </div>

      <div id='profile-description'>
        <div id="profile-avatar" style={{backgroundImage: `url(${user.avatar})`}}>
          <button id='edit-avatar'>
            <UploadWidgetAvatar id='change-avatar-button' setter={setAvatar}/>
          </button>
        </div>
        <div id='description-user'>
          <h1>{user.name}</h1>
          <p>{user.description}</p>
        </div>
        <button id='edit-profile-user' onClick={handleButtonClick}>Edit Profile</button>
        <div>{showTextBox && (
          <form onSubmit={sendDescription}>
        <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Ingrese Description..." cols="30" rows="10"/>
        <button type='submit' id='submit-description-user'>Confirm</button>
        </form>
        )}</div>

      </div>

    </div>
    
  )
}






export default OwnProfile