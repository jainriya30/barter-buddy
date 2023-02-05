import { useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";
import { getProducts } from "../utils/fireBaseUtil";
import { UserContext } from "../context/UserContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category }) => {
  const { userData } = useContext(UserContext);

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getProducts(userData, category).then((products) => {
      setProducts(products);
    });
  }, [userData, category]);

  return (
    <Container>
      {products.map((item) => (
        <Product
          item={item}
          key={item.uid}
          onClick={() => {
            navigate("/product", {
              state: {
                item: item,
              },
            });
          }}
        />
      ))}
    </Container>
  );
};

export default Products;
