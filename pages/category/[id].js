import Center from "@/components/Center";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import React from "react";
import styled from "styled-components";


const CatHeading = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    margin-left: 1.2rem;
    margin-top: 175px;
    text-transform: capitalize;
    color: #333;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export default function categoryPage({ category, catProducts }) {
  console.log({ category });
  return (
    <>
      <Header />
      <Center>
        
        <CatHeading>{category.name}</CatHeading>
        <div>
          {catProducts.map((product) => (
            <div key={product._id}>
             
                <div>
                  <Featured products={catProducts }  />
              </div>
            </div>
          ))}
        </div>
      </Center>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const category = await Category.findById(context.query.id);
  const catProducts = await Product.find({ category: category._id },  null, {
      sort: { _id: -1 },
    });
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
        catProducts: JSON.parse(JSON.stringify(catProducts)),
    },
  };
}
