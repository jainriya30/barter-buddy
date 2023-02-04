import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import React, { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0e1ee;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 60%;
  height: 40vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 350px;
  align-items: center;
  width: 100%;

  ${mobile({ padding: "50px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 4rem;
  text-align: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
  padding: 2px;
  /* border: 5px black; */
  /* border-style: outset; */
  font-size: 1.5rem;
  width: 100%;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 1.5rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 30px;
  display: flex;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: black;
  cursor: pointer;
  font-weight: 500;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Button2 = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px #252525;
  cursor: pointer;
  font-weight: 500;
  color: #252525;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    background-color: Black;
  }
`;

const Button1 = styled.button`
  margin: 0px;
  padding: 15px;
  border: 1px solid black;
  background-color: #06c206;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px 5px #252525;
  cursor: pointer;
  font-weight: 500;
  color: #252525;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    background-color: Black;
  }
`;

const Button3 = styled.button`
  margin: 0px auto;
  padding: 15px;
  border: 1px solid black;
  background-color: #f01c1c;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #252525;
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    background-color: Black;
  }
`;

const H3 = styled.h3`
  font-weight: 500;
  font-size: 2rem;
`;
const ProductInfo = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("HERE");
    console.log(location.state.item);
  });

  const [fair, setFair] = useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Slider sliderItems={location.state.item.img}></Slider>
        <InfoContainer>
          <Title>
            <b>{location.state.item.title}</b>
          </Title>
          <br></br>
          <H3>Description</H3>
          <Desc>{location.state.item.desc}</Desc>
          <H3>Usage</H3>
          <br></br>
          <Price>20 months</Price>
          <br></br>
          <H3>Category : </H3>
          <br></br>
          <p>
            <Button2>{location.state.item.category}</Button2>
          </p>{" "}
          <span> </span>
          <br></br>
          <H3>Interested in : </H3>
          <br></br>
          <div>
            {location.state.item.interest.map((intrst) => (
              <p>
                <Button2 className="w3-btn w3-black">{intrst}</Button2>
              </p>
            ))}

            {/* <p>
              <button class="w3-btn w3-black">Artifacts</button>
            </p> */}
          </div>
          <br />
          <br />
          <Divider></Divider>
          <FilterContainer>
            <Filter>
              <FilterTitle>Trade with : </FilterTitle>
              <FilterSize onChange={() => setFair(true)}>
                <FilterSizeOption>Product 1</FilterSizeOption>
                <FilterSizeOption>Product 2</FilterSizeOption>
                <FilterSizeOption>Product 3</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          {fair && (
            <button
              style={{
                padding: "10px",
                backgroundColor: "green",
                marginBottom: "20px",
              }}
            >
              Its a Fair Deal
            </button>
          )}
          <AddContainer>
            <Button1
              onClick={() => {
                alert("Notification send to user");
                navigate("/");
              }}
            >
              DEAL
            </Button1>
            <Button3 onClick={() => navigate("/chat")}>NEGOTIATE</Button3>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductInfo;
