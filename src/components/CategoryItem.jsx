import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 10vh;
  position: relative;
  background: #291f28;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  /* margin-bottom: 20px; */
  font-size: 18px;
`;

const CategoryItem = ({ item, onClick }) => {
  return (
    <Container onClick={onClick}>
      {/* <Image src={item.img} /> */}
      <Info>
        <Title>{item.title}</Title>
        {/* <Button>SHOP NOW</Button> */}
      </Info>
    </Container>
  );
};

export default CategoryItem;
