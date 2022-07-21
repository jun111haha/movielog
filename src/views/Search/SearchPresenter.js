import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Message from "../../component/Message";

const Form = styled.form`
  width: 100%;
  padding-left: 1000px;
`;

const Input = styled.input`
  all: unset;
  color: #ffff;
  height: 30px;
  padding: 11px 20px;
  font-size: 1.2rem;
  text-align: center;
  &:focus {
    border-bottom: 4px solid #f0e9c8;
    transition: border-bottom 0.5s ease-in-out;
  }
`;

const Button = styled.button`
  all: unset;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  cursor: pointer;
  color: white;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;
const SearchPresenter = (props) => {
  return (
    <Form>
      <SearchBox>
        <Input placeholder="검색어를 입력해주세요"></Input>
        <Button>
          <SearchIcon />
        </Button>
      </SearchBox>
    </Form>
  );
};

export default SearchPresenter;
