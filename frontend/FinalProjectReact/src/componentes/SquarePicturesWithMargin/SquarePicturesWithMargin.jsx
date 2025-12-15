import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getAllPetsByShelter } from "../../services/petService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SquarePicturesWithMargin() {
  const { shelterId } = useParams();
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getPets = async () => {
      const { result } = await getAllPetsByShelter(shelterId);
      setPets(result);
    };
    getPets();
  }, []);

  return (
    <ImageList sx={{ width: 800, height: 400 }} id='lol' cols={4} rowHeight={164}>
      {pets.map((pet, index) => (
        <Link to={`/app/petprofile/${pet.id}`}>
          <ImageListItem
            key={index}
            style={{ margin: 20, alignItems: "center" }}
          >
            
            <img
              srcSet={pet.media}
              src={pet.media}
              alt={pet.name}
              loading="lazy"
            />

            <div>{`Nombre: ${pet.name}`}</div>
            <div>{`Edad: ${pet.age}`}</div>
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default SquarePicturesWithMargin;
