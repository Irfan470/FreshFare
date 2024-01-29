//
import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { CartContext } from "./CartContext";

const StyledImage = styled.img`
  max-width: 90%;
  height: auto;
  margin: 0 auto;
  display: block;
  max-height: 90px;
`;

const ProductContainer = styled.div`

  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
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

const ProductPrice = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, .5fr));
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  
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
              </ProductLink>
              <ButtonsContainer>
                <ProductPrice>Price: ${product.price}</ProductPrice>
                <Button
                  primary
                  onClick={() => addToCart(product._id)}
                >
                 Buy
                </Button>
              </ButtonsContainer>
            </ProductContainer>
          ))}
        </ProductGrid>
      </Center>
    </div>
  );
}
