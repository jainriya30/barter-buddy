import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-gap: 16px; */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: lightgray;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Button = styled.button``;

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const handleImageUpload = (e) => {
    setImages([...images, URL.createObjectURL(e.target.files[0])]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to submit the form data to the server
  };

  return (
    <Container>
      <Navbar />
      <ImageContainer>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="title">Title:</Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="description">Description:</Label>
        <Input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Label htmlFor="category">Category:</Label>
        <Input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Label htmlFor="image1">Image 1:</Label>
        <Input
          id="image1"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Label htmlFor="image2">Image 2:</Label>
        <Input
          id="image2"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <Button></Button>
        <Label htmlFor="price">Price:</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Label htmlFor="purchaseDate">Purchase Date:</Label>
        <Input
          id="purchaseDate"
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
        <button type="submit">Add more images</button>
        <button type="submit">Submit</button>
      </FormContainer>
    </Container>
  );
};

export default AddProducts;
