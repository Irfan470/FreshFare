import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #28a745;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLink = styled.a`
  margin-left: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #666;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">FreshFare</Logo>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/products">Products</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/cart">Cart(0)</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
