import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import React from "react";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("Only POST requests allowed");
    return;
  }
  const { name, email, city, zip, state, address, country, products } = req.body;
  console.log({products})
  const productIds = products.split(",");
  console.log(productIds);
  await mongooseConnect();
  const uniqueProductIds = [...new Set(productIds)];
  const productsData = await Product.find({ _id: uniqueProductIds });
  let line_items = [];
  for (const productId of uniqueProductIds) {
    const product = productsData.find((p) => p._id.toString() === productId);
    const quantity = productIds.filter((id) => id === productId).length || 0;
    if (quantity > 0 && product) {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: quantity * product.price*100,
        },
        quantity,
      });
    }
  }
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    zip,
    state,
    address,
    country,
    paid: false,
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?cancel=1",
    metadata: {
      orderId: orderDoc._id.toString(),
      test: "ok",
    },
  });
  res.json({url: session.url})
}
