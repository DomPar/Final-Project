import { useEffect, useState } from 'react';
import ShelterItem from './ShelterItem';
import { getAllShelter } from '../../services/shelterService';
import './ShelterList.css'
import { Link } from 'react-router-dom';

const listShelter = () => {
const [arrayShelter, setArrayShelter] = useState([])

useEffect(() => {
  const allShelter = async () => {
    const {result} = await getAllShelter()
    setArrayShelter(result)
    }
    allShelter()
}, []);

    const result = arrayShelter.map((oneShelter, index) => {
        return <ShelterItem key={index} image={oneShelter.avatar} name={oneShelter.shelterName} shelterId={oneShelter.id}/>;
    })
    return result;
}



const ShelterList = () => {
  return (
    <div id='shelter-list-container'>
        {listShelter()}
    </div>
    
  )
}

export default ShelterList