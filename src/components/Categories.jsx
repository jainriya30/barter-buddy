import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.p`
  margin-left: 30px;
  font-size: 20px;
  /* background: green; */
`;
const MainContainer = styled.div`
  padding: 2rem 0;
  background-color: #fbeefc;
`;
const Categories = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Title>Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem
            item={item}
            key={item.id}
            onClick={() => {
              navigate("/category", {
                state: {
                  category: item.title,
                },
              });
            }}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default Categories;
