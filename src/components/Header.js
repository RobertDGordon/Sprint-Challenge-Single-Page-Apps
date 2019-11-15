import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;

`

export default function Header() {
  return (
    <>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    <NavLinks>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/characters-list">Characters</NavLink>
      <NavLink to="/locations-list">Locations</NavLink>
    </NavLinks>
    </>
  );
}
