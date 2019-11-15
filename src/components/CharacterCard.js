import React from "react";
import styled from 'styled-components';

const Card =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid black;
  border-radius: 5px;
  width: 250px;
  height: 250px;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: white;
  text-shadow: 2px 2px 4px #000000;
  background-image: url('https://cdn.clipart.email/a09286f3801b6184b2c79e37f0dc6fe8_rick-and-morty-portal-rick-and-morty-t-shirt-teepublic_630-630.jpeg');
  background-size: cover;
  div{
    margin: 3px 0;
  }
  span{
    font-weight: bold;
  }
`


export default function CharacterCard(props) {
  return (
    <>
    <Card>
      <div><span>Name:</span> {props.name}</div>
      <div><span>Species:</span> {props.species}</div>
      <div><span>Status:</span> {props.status}</div>
      <div><span>Location:</span> {props.location.name}</div>
    </Card>
  </>
  )
}
