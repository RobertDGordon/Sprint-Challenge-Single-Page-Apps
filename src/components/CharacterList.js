import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const SearchBar = styled.section`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    width: 620px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      /* border: 1px solid red; */
    }    
    input{
      margin: 0 5px;
      border-left: 1px solid black;
    }
    label{
      margin: 0 10px;
    }
    button{
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      background-color: darkgrey;
    }
`

const CharacterCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 650px;
  overflow: auto;
`

const PageButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px 25px;
        color: white;
        border: 1px solid black;
        border-radius: 5px;
        background-color: darkgrey;
        width: 85px;
    }
`

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);

  const [srch, setSrch] = useState({name:" ", status:" "});

  const [searchNow, setSearchNow] = useState ({});

  let [page, setPage] = useState (0);

  const [pages, setPages] = useState(0)

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };

  const handlePrevious = event => {
    if (page === 1){
        console.log('first page count =', page)
    }else{
      setPage(page = page - 1)
      console.log('current page count', page)
    }
  // setSearchNow(srch)
  // console.log('prev button')
};

const handleNext = event => {
  if (page === pages){
      console.log('final page')
  }else if (page === 0){
      setPage(1)
  }else{
    setPage(page =  page + 1)
    console.log('current page count', page)
  }
  // setSearchNow(srch)
  // console.log('next button')
};

  const handleSubmit = event => {
    event.preventDefault();
    setSearchNow(srch)
    console.log (srch.name, srch.status);
  }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?name=${srch.name}&status=${srch.status}&page=${page.toString()}`)
      .then(response => {
        console.log(response.data.results)
        setPages(response.data.info.pages)
        setCharacters(response.data.results)
      })
      .catch (error => {
        console.log (error);
      })

  },[searchNow, page]);

  return (
    <>
      <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Name:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <label>
            Status:
            {/* <input type="text" name="status" onChange={event => handleChange(event)} /> */}
            <select name="status" onChange={event => handleChange(event)}>
              <option value=''>All</option>
              <option value='Alive'>Alive</option>
              <option value='Dead'>Dead</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <button>Show Me What You Got!</button>
        </form>
      </SearchBar>
      <CharacterCards>
      {characters.map (character => (
        <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status} location={character.location}/>
      ))}
    </CharacterCards>
    <PageButtons>
      <button onClick={event => handlePrevious(event)}>Previous</button>
      <button onClick={event => handleNext(event)}>Next</button>
    </PageButtons>
    </>
  );
}
