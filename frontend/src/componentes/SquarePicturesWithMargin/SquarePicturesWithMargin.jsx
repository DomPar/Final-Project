import "./SquarePicturesWithMargin.css";
import { getAllPetsByShelter } from "../../services/petService";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SquarePicturesWithMargin() {
  const { shelterId } = useParams();
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPets = async () => {
      const { result } = await getAllPetsByShelter(shelterId);
      setPets(result);
    };
    getPets();
  }, [shelterId]);

  return (
    <div className="pets-grid-container">
      {pets.map((pet) => (
        <div 
          key={pet.id}
          className="pet-card"
          onClick={() => navigate(`/app/petprofile/${pet.id}`)}
        >
          <div 
            className="pet-card-image"
            style={{backgroundImage: `url(${pet.media})`}}
          />
          <div className="pet-card-info">
            <h3>{pet.name}</h3>
            <p>{pet.age} años</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SquarePicturesWithMargin;
