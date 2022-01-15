import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import HeroBg from "./../assets/hero_bg.png";
import { BiPhone, BiMailSend } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { Button as RsButton } from "rsuite";

export const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-image: url(${HeroBg});
  background-position: center;
  background-size: cover;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #0082e5;
  color: white;

  @media (max-width: 705px) {
    display: none;
  }
`;

export const ContactBar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  margin: 0 20px;
`;

export const SearchBar = styled.input`
  width: 15%;
  margin: 10px 30px;
  padding: 5px;
  border: 2px solid #2192e8;
  border-radius: 8px;
  background: #0988e8;
  color: white;
`;

export const SignInBar = styled(Link)`
  align-self: center;
  margin: 0 40px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
`;

export const Logo = styled.p`
  align-self: center;
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
  padding: 10px;
  color: white;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    border: 2px solid #289ffa;
    color: #305c7d;
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
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 10%;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

export const HeroTitle = styled.h2`
  font-size: 46px;
  font-weight: 700;
  color: white;
`;

export const HeroDescription = styled.p`
  font-size: 18px;
  color: white;
  line-height: 40px;
`;

export const HeroBtn = styled(RsButton)`
  width: 150px;
  height: 50px;
  border: 1px solid white;
  border-radius: 24px;
  margin: 0 auto;
  color: white;
  background-color: transparent;

  &:hover {
    color: #0362aa;
    border-color: #0362aa;
  }
`;

// To-Do: (1): przełączanie do menu mobilnego po kliknięciu na ToggleBar

const TopSection = () => {
  return (
    <TopSectionContainer>
      <TopBar>
        <ContactBar>
          <BiPhone />
          <p>123 456 789</p>
          <BiMailSend />
          <p>contact@brand.com</p>
        </ContactBar>
        <SearchBar placeholder="Search this site" />
        <SignInBar to="/signin">Sign in</SignInBar>
      </TopBar>
      <Nav>
        <Logo>Landing_BRAND</Logo>
        <Menu>
          <MenuItem to="/home" exact>
            Home
          </MenuItem>
          <MenuItem to="/about">About us</MenuItem>
          <MenuItem to="/pricing">Pricing</MenuItem>
          <MenuItem to="/contact">Contact us</MenuItem>
        </Menu>
        <ToggleBar>
          <CgMenu />
        </ToggleBar>
      </Nav>
      <Hero>
        <HeroTitle>Make something valuable</HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore consequat. Duis aute
          irure dolor in reprehenderit in vol
        </HeroDescription>
        <HeroBtn appearance="primary" size="lg">
          Get started
        </HeroBtn>
      </Hero>
    </TopSectionContainer>
  );
};

export default TopSection;
