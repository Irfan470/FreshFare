import React, { useContext, useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Center from './Center';
import { CartContext } from './CartContext';
import { Image, ImageSlider, ThumbnailImage, ThumbnailList } from './ImageSlider';

const ProductContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px;
`;



const Title = styled.h1`
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
`;

const Description = styled.p`
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
        text-align: center;
        line-height: 1.5;
`;

const TitleDescriptionBox = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #b2945b;
  margin: 20px auto; /* Center horizontally */
  justify-content: center;
  align-items: center;
`;
const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
justify-content: center;
`;
       
const ButtonWrapper = styled(Button)`
        margin-bottom: 20px;
`;
const StyledTitle = styled.h1`
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
`;

const MainProductPage = ({ product }) => {
        const [selectedImage, setSelectedImage] = useState(product.images[0]);

        const handleThumbnailClick = (image) => {
                setSelectedImage(image);
        };
        const productId = product._id;
        const {addToCart}=useContext(CartContext);
         function addProductToCart() {
           addToCart( productId);
           
         }

        return (
            <ProductContainer>
            
            <StyledTitle>Todays Special</StyledTitle>
                <ImageSlider>
                    <Image
                        src={selectedImage}
                        alt="Product Image"
                    />
                </ImageSlider>
                <ThumbnailList>
                    {product.images.map((image, index) => (
                        <ThumbnailImage
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleThumbnailClick(image)}
                        />
                    ))}
                </ThumbnailList>
                <Center>
                    <TitleDescriptionBox>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <Price>Price: ${product.price}</Price>
                    </TitleDescriptionBox>
                    <ButtonWrapper primary onClick={addProductToCart}>Add to Cart</ButtonWrapper>
                </Center>
            </ProductContainer>
        );
};

export default MainProductPage;
