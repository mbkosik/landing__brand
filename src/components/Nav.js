import React from "react";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: blue;
	justify-content: space-around;
`;

export const Logo = styled.p`
  color: white;
  font-size: 32px;
`;

export const Menu = styled.div`
  display: flex;
	gap: 10px;
`;

export const MenuItem = styled.p`
	color: white; 
	font-size: 16px; 
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`

const TopBar = () => {
  return (
    <Nav>
      <Logo>Landing_BRAND</Logo>
      <Menu>
				<MenuItem>Home</MenuItem>
				<MenuItem>About</MenuItem>
				<MenuItem>Contact us</MenuItem>
      </Menu>
    </Nav>
  );
};

export default TopBar;
