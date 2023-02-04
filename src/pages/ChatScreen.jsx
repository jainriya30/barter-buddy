import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #f2f2f2;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #3f51b5;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  padding: 10px;
`;

const Message = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Sender = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f2f2f2;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 20%;
  height: 40px;
  padding: 10px;
  background-color: #3f51b5;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const ChatScreen = () => {
  const [chats, setChats] = useState(["I'm good, thank you! How about you?"]);
  const [text, setText] = useState("");

  return (
    <Container>
      <Header>
        <Title>Chat Screen</Title>
      </Header>
      <ChatContainer>
        <Message>
          <Sender>User 1:</Sender>
          Hello, how are you?
        </Message>
        {chats.map((chat) => (
          <Message>
            <Sender>User 2:</Sender>
            {chat}
          </Message>
        ))}
      </ChatContainer>
      <InputContainer>
        <Input
          placeholder="Enter your message here"
          value={text}
          onChange={(c) => setText(c.target.value)}
        />
        <Button
          onClick={() => {
            setChats([...chats, text]);
            setText("");
          }}
        >
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;
