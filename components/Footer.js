import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #bfb093;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  background-color: #bfb093;
  border-top: 1px solid #28a745;
  
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;

`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

`;

const SocialMediaLink = styled.a`
   margin: 0 10px;
  color: #3e5c74;
  font-size: 18px;
  transition: 0.3s;

`;




const Footer = () => {
  return (
  <FooterContainer>
      <FooterText>&copy; 2024 FreshFare - All rights reserved</FooterText>
      <SocialMediaContainer>
        <SocialMediaLink href="https://www.facebook.com">
         Facebook
        </SocialMediaLink>
        <SocialMediaLink href="mailto:amonium7@gmail.com">
         Email
        </SocialMediaLink>
        <SocialMediaLink href="https://www.instagram.com">
         Instagram
        </SocialMediaLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
