// import Featured from '@/components/Featured';
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import { mongooseConnect } from '@/lib/mongoose';


// import { Product } from '@/models/Product';
// import React from 'react'

// export default function dairy({ categoryProducts}) {
//   return (
//     <>console.log({categoryProducts})
//     <Product product={categoryProducts} /></>
//   )
// }
// export async function getServerSideProps() {
//   const featuredProductId = "659ea33b1705fa5b4ed5e359";
//   await mongooseConnect();
//   // Get products by category
//   const category = "659ea1d81705fa5b4ed5e30d";
//   const categoryProducts = await Product.find({ category }, null, {
//     sort: { createdAt: -1 },
//     limit: 10,
//   });

//   return {
//     props: {
//       categoryProducts: JSON.parse(JSON.stringify(categoryProducts)),
//     },
//   };
// }
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import React from 'react';

export default function Dairy({ categoryProducts }) {
    console.log({ categoryProducts });

    const { title, description, price, images } = categoryProducts;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Render other details as needed */}
      {/* <img src={images[0]} alt={title} /> */}
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  // Get products by category
//   ";
  const categoryProducts = await Product.find({ category: dairy}, null, {
    sort: { createdAt: -1 },
    limit: 10,
  });

  return {
    props: {
      categoryProducts: JSON.parse(JSON.stringify(categoryProducts)),
    },
  };
}
