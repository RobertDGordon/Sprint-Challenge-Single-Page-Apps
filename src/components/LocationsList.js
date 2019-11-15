import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from 'styled-components';

const SearchBar = styled.section`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    width: 800px;
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

const LocationCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 650px;
  overflow: auto;
`

export default function CharacterList() {
  
  const [loc, setLoc] = useState([]);

  const [srch, setSrch] = useState({name:" ", type:" ", dimension:" "});

  const [searchNow, setSearchNow] = useState ({});

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchNow(srch)
    console.log (srch.name, srch.type, srch.dimension);
  }

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location?name=${srch.name}&type=${srch.type}&dimension=${srch.dimension}`)
      .then(response => {
        console.log(response.data.results)
        setLoc(response.data.results)
      })
      .catch (error => {
        console.log (error);
      })

  },[searchNow]);

  return (
    <>
      <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Name:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <label>
            Type:
            {/* <input type="text" name="status" onChange={event => handleChange(event)} /> */}
            <select name="type" onChange={event => handleChange(event)}>
              <option value=''>All</option>
              <option value='Planet'>Planet</option>
              <option value='Cluster'>Cluster</option>
              <option value='Space'>Space Station</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Dream'>Dream</option>
              <option value='Resort'>Resort</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <label>
            Dimension:
            {/* <input type="text" name="status" onChange={event => handleChange(event)} /> */}
            <select name="dimension" onChange={event => handleChange(event)}>
              <option value=''>All</option>
              <option value='137'>C-137</option>
              <option value='126'>5-126</option>
              <option value='Cronenberg'>Cronenberg</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Replacement'>Replacement</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <button>Show Me What You Got!</button>
        </form>
      </SearchBar>
      <LocationCards>
      {loc.map (item => (
        <LocationCard key={item.id} name={item.name} type={item.type} dimension={item.dimension}/>
      ))}
    </LocationCards>
    </>
  );
}
