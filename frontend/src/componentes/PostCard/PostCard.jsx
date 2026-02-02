import HeartsRating from '../HeartsRating/HeartsRating'
import './PostCard.css'
import { Link, useNavigate } from 'react-router-dom'
import { getOneUser } from '../../services/userService'
import { getAllUsers } from '../../services/userService'
import { useEffect, useState } from 'react'

const PostCard = ({title, media, postId, avatar}) => {
  const [user, setUser] = useState([])

  // useEffect(() => {
  //   const getUser = async () => {
  //     const {result} = await getOneUser(userId)//Llamar a los usuarios para mostar el avatar  
  //     setUser(result)
  //     }
  //     getUser()
  // }, []);
  // console.log(user)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/app/viewpost/${postId}`)
  }
  return (
    <div id="postcard-container">
        <img src={avatar} alt="User Picture" id="profile-picture"/> 
        <div id="postcard-img" style={{backgroundImage:`url(${media})`}} onClick={handleClick}></div>
        <div id="postcard-rating"><HeartsRating/></div>
        <div id="portcard-title"><h2>{title}</h2></div>
        
    </div>
  )
}

export default PostCard