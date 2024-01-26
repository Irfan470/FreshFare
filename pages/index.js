import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainProductPage from "@/components/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

export default function index({ product, newProducts }) {
  console.log({ newProducts });
  return (
    <div>
      <Header />
      <MainProductPage product={product} />
      <Featured products={newProducts} />

      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = "659ea33b1705fa5b4ed5e359";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { createdAt: -1 },
    limit: 50,
  });
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
