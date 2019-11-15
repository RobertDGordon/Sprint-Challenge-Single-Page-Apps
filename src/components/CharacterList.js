import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const CharacterCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 750px;
  overflow: auto;
`

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch (error => {
        console.log (error);
      })

  },[]);

  return (
    <>
      <CharacterCards>
      {characters.map (character => (
        <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status} location={character.location}/>
      ))}
    </CharacterCards>
    </>
  );
}
