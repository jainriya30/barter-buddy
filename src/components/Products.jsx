import { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/fireBaseInit";
import { getProducts } from "../utils/fireBaseUtil";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.uid} />
      ))}
    </Container>
  );
};

export default Products;
