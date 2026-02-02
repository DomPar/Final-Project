import React from 'react'
import ShelterCard from '../../componentes/ShelterCard/ShelterCard'
import SquarePicturesWithMargin from '../../componentes/SquarePicturesWithMargin/SquarePicturesWithMargin'
import CardLayers3d from '../../componentes/CardLayers/CardLayers'
import './ShelterProfileFromUser.css'
import { getOneShelter } from '../../services/shelterService'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
function ShelterProfileFromUser() {
  const [shelterDatas, setShelterDatas] = useState([]);
  const { shelterId } = useParams();

  useEffect(() => {
  const getDatas = async () => {
    const { result } = await getOneShelter(shelterId);
    setShelterDatas(result);
  };
  getDatas();
}, []);
  return (
    <div id='shelter-container'>
      <div id='shelter-card-info'>
        <div id="shelter-image">
          <img src={shelterDatas.avatar} alt="Shelter Image" />
        </div>
        <div id="shelter-info">
          <p>Nombre: {shelterDatas.shelterName}</p>
          <p>Email: {shelterDatas.email}</p>
          <p>Telefono: {shelterDatas.tlf}</p>
        </div>
      </div>
        <div id='picturesandcard'>
            <SquarePicturesWithMargin/>
        </div>
        <div id='shelter-card'>
            <p id='description-shelter'>{shelterDatas.description} </p>
            <a href="https://www.google.es/maps/@28.1271824,-15.4412337,15z?entry=ttu">Encuentranos Aqui</a>
        </div>
    </div>
        
  )
}

export default ShelterProfileFromUser