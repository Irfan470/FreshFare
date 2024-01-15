import React, { useContext, useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Center from './Center';
import { CartContext } from './CartContext';

const ProductContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px;
`;

const ImageSlider = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        overflow: hidden;
`;

const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
                transform: scale(1.1);
        }
`;

const ThumbnailList = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
`;

const ThumbnailImage = styled.img`
        width: 80px;
        height: 80px;
        object-fit: contain;
        cursor: pointer;
        margin: 0 5px;
        border: 2px solid transparent;

        &:hover {
                border-color: #000;
        }
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
