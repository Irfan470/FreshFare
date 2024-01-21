//
import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { CartContext } from "./CartContext";

const StyledImage = styled.img`
  max-width: 60%;
  height: auto;
  margin: 0 auto;
  display: block;
`;

const ProductContainer = styled.div`

  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const ProductLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 24px;
  margin-bottom: 10px;
  &:hover {
    color: #666;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ReadMore= styled(Link)`
  text-decoration: none;
  `;
export default function Featured({ products }) {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <div>
      <Center>
        <ProductGrid>
          {products.map((product) => (
            <ProductContainer key={product._id}>
              <ProductLink href={`/item/${product._id}`}>
                <StyledImage
                  src={product.images[0]}
                  alt={product.title}
                />
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>
                
                {product.description}</ProductDescription>
                <ProductPrice>Price: ${product.price}</ProductPrice>
              </ProductLink>
              <ButtonsContainer>
                <ReadMore href={`/item/${product._id}`}>
                  <Button >Learn More</Button>
                </ReadMore>

                <Button
                  primary
                  onClick={() => addToCart(product._id)}
                >
                  Shop Now
                </Button>
              </ButtonsContainer>
            </ProductContainer>
          ))}
        </ProductGrid>
      </Center>
    </div>
  );
}
