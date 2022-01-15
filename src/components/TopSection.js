import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import HeroBg from "./../assets/hero_bg.png";
import { CgMenu } from 'react-icons/cg'

export const TopSectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  background-image: url(${HeroBg});
  background-position: center;
  background-size: cover;
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
`;

export const Logo = styled.p`
  color: white;
  font-size: 32px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center; 
  gap: 30px;

  @media (max-width: 705px) {
    display: none;
    position: absolute; 
    width: 100vw; 
    height: 100vh; 
    flex-direction: column;  
    background-color: #0891f9;
  }
`;

export const MenuItem = styled(NavLink)`
  color: white;
  font-size: 16px;
  text-decoration: none;
  padding: 10px; 

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #305c7d;
    border: 2px solid #289ffa; 
    background-color: #1095fa;
  }
`;

export const ToggleBar = styled.div`
  display: none; 
  color: white;
  font-size: 40px;
  cursor: pointer; 

  @media (max-width: 705px) {
    display: flex;
    align-items: center; 
  }
`

// To-Do: (1): przełączanie do menu mobilnego po kliknięciu na ToggleBar

const TopSection = () => {
  return (
    <TopSectionContainer>
      <Nav>
        <Logo>Landing_BRAND</Logo>
        <Menu>
          <MenuItem to="/" exact>Home</MenuItem>
          <MenuItem to="/about">About us</MenuItem>
          <MenuItem to="/pricing">Pricing</MenuItem>
          <MenuItem to="/contact">Contact us</MenuItem>
        </Menu>
        <ToggleBar>
          <CgMenu />
        </ToggleBar>
      </Nav>
    </TopSectionContainer>
  );
};

export default TopSection;
