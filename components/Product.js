import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Center from './Center';

const ProductContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
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
`;

const TitleDescriptionBox = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #B2945B;
  margin-bottom: 20px;
  ;
`;
const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
justify-content: center;
`;
       

const MainProductPage = ({ featuredProduct }) => {
        const [selectedImage, setSelectedImage] = useState(featuredProduct.images[0]);

        const handleThumbnailClick = (image) => {
                setSelectedImage(image);
        };

        return (
            <ProductContainer>
                <ImageSlider>
                    <Image
                        src={selectedImage}
                        alt="Product Image"
                    />
                </ImageSlider>
                <ThumbnailList>
                    {featuredProduct.images.map((image, index) => (
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
                        <Title>{featuredProduct.title}</Title>
                        <Description>{featuredProduct.description}</Description>
                        <Price>Price: ${featuredProduct.price}</Price>
                    </TitleDescriptionBox>
                    <Button primary>Add to Cart</Button>
                </Center>
            </ProductContainer>
        );
};

export default MainProductPage;
