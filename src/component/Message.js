import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  margin-left: 50px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 3rem;
  font-weight: 600;
`;

const Message = (props) => {
  const { color, text } = props;
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

export default Message;
