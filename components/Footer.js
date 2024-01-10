import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 FreshFare - All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
