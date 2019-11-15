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
  background-image: url('https://i.pinimg.com/originals/64/5c/8d/645c8d877f6e2aad7fa6545140c72a52.gif');
  background-size: cover;
  div{
    margin: 3px 0;
  }
  span{
    font-weight: bold;
    color: greenyellow;
  }
`


export default function CharacterCard(props) {
  return (
    <>
    <Card>
      <div><span>Name:</span> {props.name}</div>
      <div><span>Type:</span> {props.type}</div>
      <div><span>Dimension:</span> {props.dimension}</div>
    </Card>
  </>
  )
}
