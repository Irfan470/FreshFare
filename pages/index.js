import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

export default function index({ product, newProducts }) {
  console.log({ newProducts });
  return (
    <div>
      <Header />
      <Featured products={newProducts} />
      {/* <Featured featuredProduct={product} /> */}
      {/* <Products products={newProducts}/> */}
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = "659568ed36b58332933a0057";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { createdAt: -1 },
    limit: 10,
  });
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
