import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getAllPetsByShelter } from "../../services/petService";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SquarePicturesWithMargin() {
  const { shelterId } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const { result } = await getAllPetsByShelter(shelterId);
      setPets(result);
    };
    getPets();
  }, [shelterId]);

  return (
    <ImageList cols={4} rowHeight={164}>
      {pets.map((pet) => (
        <ImageListItem
          key={pet.id}
          component={Link}
          to={`/app/petprofile/${pet.id}`}
        >
          <img
            src={pet.media}
            alt={pet.name}
            loading="lazy"
          />
          <div>{`Nombre: ${pet.name}`}</div>
          <div>{`Edad: ${pet.age}`}</div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SquarePicturesWithMargin;
