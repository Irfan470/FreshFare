import Header from "@/components/Header";
import axios from "axios";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import React, { useContext, useEffect, useState } from "react";
import Footer from "@/components/Footer";

const ColumnWrapper = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  background-color: #c9ddc6;
  border-radius: 10px;
  padding: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ImageCell = styled.td`
  padding: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 20px;
  }
  div {
    font-weight: bold;
    font-size: 18px;
  }
`;

const Quantity = styled.span`
  margin: 0px 7px 0px 0px;
`;
const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  text-align: right;
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #28a745;
  }
`;

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [paid, setPaid] = useState(false);
useEffect(() => {
  if (cart.length > 0) {
    axios.post("/api/cart", { ids: cart }).then((response) => {
      setProducts(response.data);
    });
  } else {
    setProducts([]);
  }
}, [cart]);
console.log(products);
const addMore = (id) => {
  addToCart(id);
};

const decreaseProduct = (id) => {
  removeFromCart(id);
};
useEffect(() => {
   if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setPaid(true);
      clearCart();
    }
}, []);
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      zip,
      state,
      address,
      country,
      products: cart.join(","),
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total +=
      products[i].price * cart.filter((id) => id === products[i]._id).length;
  }
   if (paid) {
     return (
       <>
         <Header />
         <Center>
           <ColumnWrapper>
             <Box>
               <h1>Thanks for your order!</h1>
               <p>We will email you when your order will be sent.</p>
             </Box>
           </ColumnWrapper>
         </Center>
       </>
     );
   }
  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <Box>
            <h2>Cart</h2>
            {!cart.length && <p>No items in cart</p>}
            {products.length && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>Product</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader>Price</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product._id}>
                      <ImageCell>
                        <img
                          src={product.images[0]}
                          alt={product.title}
                        />
                        <div>{product.title}</div>
                      </ImageCell>

                      <TableCell>
                        <Button
                          small
                          onClick={() => decreaseProduct(product._id)}
                        >
                          -
                        </Button>
                        <Quantity>
                          {cart.filter((id) => id === product._id).length}
                        </Quantity>

                        <Button
                          small
                          onClick={() => addMore(product._id)}
                        >
                          +
                        </Button>
                      </TableCell>
                      <TableCell>
                        $
                        {cart.filter((id) => id === product._id).length *
                          product.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            <TotalPrice>Total Price: ${total}</TotalPrice>
          </Box>

          {!!cart?.length && (
            <Box>
              <h2>Order Information</h2>
              <p>Please enter your shipping information</p>
              <Input
                placeholder="Name"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email"
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Address"
                type="text"
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                placeholder="City"
                type="text"
                value={city}
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                placeholder="State"
                type="text"
                value={state}
                name="state"
                onChange={(e) => setState(e.target.value)}
              />
              <Input
                placeholder="Zip"
                type="text"
                value={zip}
                name="zip"
                onChange={(e) => setZip(e.target.value)}
              />
              <Input
                placeholder="Country"
                type="text"
                value={country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
              <Button primary onClick={goToPayment} >Checkout</Button>
            
            </Box>
          )}
        </ColumnWrapper>
      </Center>
      <Footer />
    </>
  );
}
