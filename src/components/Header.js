import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const HeaderWrap =styled.header`
  color: white;
  background-color: black;
  background-image: url('https://i1.wp.com/argylebandboosters.com/wp-content/uploads/2019/03/videoblocks-animation-of-stars-background-seamless-loop_bx3pbkf9f_thumbnail-full07.png?ssl=1');
  background-size:cover;
  display: flex;
  justify-content: space-around;
  height: 75px;
  border-radius: 10px;
  font-family: 'Patrick Hand SC', cursive;
  img{
    height: 75px;
    width:auto;
  }
  span{
    color: greenyellow;
  }
  h1{
    margin: 10px;
  }
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`

export default function Header() {
  return (
    <>
    <HeaderWrap>
      <h1 className="ui center">Let's Get <span>Schwifty!</span></h1>
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
