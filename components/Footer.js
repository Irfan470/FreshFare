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
  color: #333;
`;

const FacebookLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const EmailLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const InstagramLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 FreshFare - All rights reserved</FooterText>
      <SocialMediaContainer>
        <SocialMediaLink href="https://www.facebook.com">
          <FacebookLogo src="/path/to/facebook-logo.png" alt="Facebook" />
        </SocialMediaLink>
        <SocialMediaLink href="mailto:example@example.com">
          <EmailLogo src="/path/to/email-logo.png" alt="Email" />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.instagram.com">
          <InstagramLogo src="/path/to/instagram-logo.png" alt="Instagram" />
        </SocialMediaLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
