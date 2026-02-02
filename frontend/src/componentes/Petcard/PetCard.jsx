import React, { useState } from 'react'
import './PetCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {addUserToFavorites} from '../../services/userService.js'
import { useParams } from 'react-router';
import { getOnePet } from '../../services/petService.js';
import { useEffect } from 'react';

function PetCard() {
const[petDatas, setPetDatas] = useState([])

const petId = useParams()
    const handleClick = () => {
           addUserToFavorites(petId.petId) 
           console.log(petId.petId)
      }

      useEffect(() => {
        const getData = async () => {
          const {result} = await getOnePet(petId.petId)
          setPetDatas(result)
          }
          getData()
      }, [])

  return (
    <div id='petcard-container' >
        <img id="pet-picture" src={petDatas.media} alt="Pet Photo" />
    
        <div id="pet-info-section">
            <div id="pet-description">
                <h1>{petDatas.name}: {petDatas.age} años
                    <button id="petcard-add-fav" onClick={handleClick} >
                        <FavoriteIcon fontSize='large' sx={{color:'red'}}/>
                    </button>
                </h1>
                <h6>Categoria: {petDatas.species}</h6>
                <p>{petDatas.description}</p>
            </div>
            
            <div id="hobbiesbox">
                <h2 id="hobbies">¡Conoce a {petDatas.name}!</h2>
                <div id="text"> 
                    <span>🐾 {petDatas.preferences}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PetCard
