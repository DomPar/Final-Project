import React from "react";
import "./ShelterOwnProfile.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPetsByShelter } from "../../services/petService";
import { getOwnShelter } from "../../services/shelterService";
import { updateShelterDescription, updateShelterAvatar } from "../../services/shelterService";
import UploadWidgetAvatar from "../../componentes/UploadWidgetAvatar/UploadWidgetAvatar";

function ShelterOwnProfile() {
  const [showTextBox, setShowTextBox] = useState(false);
  const [description, setDescription] = useState("");
  const { shelterId } = useParams();
  const [shelterDatas, setShelterDatas] = useState({});
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  const [shelterAvatar, setShelterAvatar] = useState(shelterDatas.avatar)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const getDatas = async () => {
      const { result } = await getOwnShelter(shelterId);
      setShelterDatas(result);
    };
    getDatas();
  }, [update, shelterId]);

  useEffect(() => {
    const getPets = async () => {
      const { result } = await getAllPetsByShelter(shelterId);
      setPets(result);
    };
    getPets();
  }, [shelterId]);

  useEffect(() => {
    if (shelterAvatar) {
      sendAvatarShelter()
    }
  }, [shelterAvatar]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = () => {
    setShowTextBox(!showTextBox);
  };

  const sendDescription = async (e) => {
    e.preventDefault()
    const { result } = await updateShelterDescription({ description });
    setUpdate(!update)
    setShowTextBox(false)
    return result;
  };

  const sendAvatarShelter = async () => {
    const result = await updateShelterAvatar({ avatar: shelterAvatar });
    setUpdate(!update)
    return result;
  };

  return (
    <div id="shelter-profile-container">
      <div id="shelter-profile-pets">
        <button id="shelter-profile-button-add-pet" onClick={() => navigate('/app/createpet')}>
          Add Pet
        </button>

        <div id='pets-shelter-container'>
          {pets.map((pet) => (
            <div 
              key={pet.id}
              className="pet-shelter-item"
              style={{ backgroundImage: `url(${pet.media})` }}
              onClick={() => navigate(`/app/petprofile/${pet.id}`)}
            >
              <div className="pet-overlay">
                <span>{pet.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="shelter-profile-info">
        <div id="shelter-profile-avatar" style={{ backgroundImage: `url(${shelterDatas.avatar})` }}>
          <button id='edit-avatar'>
            <UploadWidgetAvatar setter={setShelterAvatar} />
          </button>
        </div>

        <div id="shelter-profile-data">
          <h1>{shelterDatas.shelterName}</h1>
          <p>{shelterDatas.description || 'Sin descripción'}</p>
        </div>

        <button id="edit-profile-shelter" onClick={handleButtonClick}>
          Edit Profile
        </button>

        {showTextBox && (
          <div style={{ padding: '0 20px 20px' }}>
            <form onSubmit={sendDescription} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Ingrese Description..."
                style={{
                  padding: '12px',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
              <button 
                type="submit" 
                id="submit-description-shelter"
                style={{
                  padding: '12px',
                  background: 'var(--secondary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Confirm Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShelterOwnProfile;
