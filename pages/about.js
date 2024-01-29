import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  margin-top: 150px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const Highlight = styled.span`
  color: #ff6f00;
  font-weight: bold;
  font-size: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <Title>About Us</Title>
        <Description>
          Welcome to FRESHFARE, your one-stop destination for fresh dairy and
          vegetables. We are passionate about providing you with the highest
          quality products, sourced directly from local farms. Our mission is to
          promote healthy living and support local farmers in our community.
          <br />
          <br />
          At FRESHFARE, we believe in the power of fresh and nutritious food.
          That's why we carefully select each product to ensure its freshness
          and taste. Whether you're looking for farm-fresh milk, organic
          vegetables, or artisanal cheese, we've got you covered.
          <br />
          <br />
          Our team of dedicated professionals works tirelessly to bring you the
          best products at affordable prices. We value your trust and strive to
          exceed your expectations with every order.
          <br />
          <br />
          Join us on this journey towards a healthier lifestyle. Experience the
          difference with FRESHFARE today!
          <br />
          <br />
          <Highlight>
            Visit our website now to explore our wide range of dairy and
            vegetable products.
          </Highlight>
        </Description>
        <SubTitle>Our Farm</SubTitle>
        <Image
          src="farm.jpg"
          alt="Farm"
        />

        <SubTitle>Our Team</SubTitle>
        <Image
          src="team.jpg"
          alt="Team"
        />
        <SubTitle>Contact Us</SubTitle>
        <Description>
          If you have any questions or inquiries, please feel free to contact us
          through our email address:
          <Highlight>info@freshfare.com</Highlight> 
          <br />
          or call us at <Highlight>1-800-123-4567</Highlight>
        </Description>
      </AboutContainer>


      <Footer />
    </>
  );
};

export default AboutPage;
