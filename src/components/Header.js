import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const HeaderWrap =styled.header`
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-around;
  height: 75px;
  border-radius: 10px;
  img{
    height: 75px;
    width:auto;
  }
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
`

export default function Header() {
  return (
    <>
    <HeaderWrap>
      <h1 className="ui center">Let's Get Schwifty!</h1>
      <img src={require ('../img/headerimg.jpg')} />
      </HeaderWrap>
    <NavLinks>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/characters-list">Characters</NavLink>
      <NavLink to="/locations-list">Locations</NavLink>
    </NavLinks>
    </>
  );
}
