import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { Image, ImageSlider, ThumbnailImage, ThumbnailList } from '@/components/ImageSlider';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  margin-top: 150px;
    text-align: center;

`;
const DescriptionBox = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #b2945b;
    margin: 20px auto; /* Center horizontally */
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    h1 {
        text-align: center;


        }
    p {
        text-align: center;
        font-size: 18px;

    }
`;
const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`;
const Wrapper= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;

`;
export default function ItemPage({product}) {
      const [selectedImage, setSelectedImage] = useState(product.images[0]);
        const { cart, addToCart } = useContext(CartContext);


      const handleThumbnailClick = (image) => {
        setSelectedImage(image);
      };
  return (
    <>
      <Header />
      <Center>
        <DescriptionBox>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </DescriptionBox>

        {/* Render other details as needed */}
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
        <Wrapper>
        <Price>Price: ${product.price}</Price>
        <Button
          primary
          onClick={() => addToCart(product._id)}
        >
          Shop Now
        </Button>
        </Wrapper>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    await mongooseConnect();
    const product = await Product.findById(id);

  return {
    props: {
        product: JSON.parse(JSON.stringify(product)),
    },
  };
}