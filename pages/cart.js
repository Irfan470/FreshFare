import Header from "@/components/Header";
import axios from "axios";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { CartContext } from "@/components/CartContext";
import React, { useContext, useEffect, useState } from "react";
import Footer from "@/components/Footer";

const ColumnWrapper = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 20px;
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

const TableBody = styled.tbody`


  


`;

 const TableRow = styled.tr`
 border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
          
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

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      axios.post("api/cart", { ids: cart }).then((res) => {
        setProducts(res.data);
      });
    }
  }, [cart]);

  const addMore = (id) => {
    addToCart(id);
  };

  const decreaseProduct = (id) => {
    removeFromCart(id);

  };
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
          </Box>

          {!!cart?.length && (
            <Box>
              <h2>Order Information</h2>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input placeholder="Address" />
              <Input placeholder="City" />
              <Input placeholder="State" />
              <Input placeholder="Zip" />
              <Input placeholder="Country" />
              <Input placeholder="Credit Card" />
              <Input placeholder="Expiration" />
              <Input placeholder="CVV" />
              <Button primary>Checkout</Button>
            </Box>
          )}
        </ColumnWrapper>
      </Center>
      <Footer />
    </>
  );
}

         


