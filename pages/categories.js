import Center from "@/components/Center";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CatHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 1.2rem;
  text-transform: capitalize;
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const MarginDiv = styled.div`
  margin-top: 175px;
  first-child {
    margin-top: 0;
  }
`;
const StyledLink = styled(Link)`
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
export default function categories({ categories, catProducts }) {
  return (
    <>
      <MarginDiv>
        <Header />
      </MarginDiv>
      <Center>
        {categories.map((cat) => (
          <div>
            <CatHeading>{cat.name}</CatHeading>
            <div>
              {catProducts[cat._id].map((product) => (
                <div>
                  <div>
                    <Featured products={catProducts[cat._id]} />
                  </div>
                </div>
              ))}
            </div>
            <StyledLink href={`/category/` + cat._id}>Show all </StyledLink>
          </div>
        ))}
      </Center>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  const categories = await Category.find();
  const catProducts = {};
  for (const category of categories) {
    const products = await Product.find({ category: category._id }, null, {
      limit: 4,
      sort: { _id: -1 },
    });
    catProducts[category._id] = products;
  }
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      catProducts: JSON.parse(JSON.stringify(catProducts)),
    },
  };
}
