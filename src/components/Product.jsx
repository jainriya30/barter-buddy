import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const { useLocation } = require("react-router-dom");

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: end;
  flex-direction: column;
  flex: 1;
  justify-content: end;
  transition: all 0.5s ease;
  cursor: pointer;
  color: #fff;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow: hidden;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  color:#2f2f2f;
  font-weight: bold;
  background-color: #fff
  border-radius: 5px; 
  transition: all 0.5s ease;
 
`;

const Product = ({ item, onClick }) => {
  const location = useLocation();
  return (
    <Container onClick={onClick}>
      <Circle />

      <Image src={item.img[0]} />
      <Info>
        <Icon>{item.title ? item.title : "Item"}</Icon>
        <Icon>{item.category ? item.category : "Category"}</Icon>
      </Info>
    </Container>
  );
};

export default Product;
