import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
const HeaderContainer = styled.header`
  background-color: #595736;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 10px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #733c1d;
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
  const { cart } = useContext(CartContext);
 
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
            <NavLink href="/cart">Cart({cart.length})</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

