/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./SignIn";
import { observer } from "mobx-react";
import useStores from "../store/useStores";

const SLink = styled(Link)`
  padding: 15px 20px;
  color: ${(props) => (props.selected ? "#f0e9c8" : "#808080")};
  border-bottom: 4px solid
    ${(props) => (props.selected ? "#f0e9c8" : "transparent")};
`;

const Item = styled.li`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
`;

const Header = styled.header`
  position: fixed;
  display: flex;
  padding: 0px 30px;
  width: 100%;
  height: 55px;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  text-shadow: black 1px 1px 10px;
`;

const LoginDiv = styled.div`
  padding: 0px 30px;
  margin-left: auto;
`;

const LoginButton = styled.button`
  font-size: 15px;
  padding: 15px 20px;
  color: #808080;
`;

const LoginState = styled.div`
  font-size: 15px;
  padding: 15px 20px;
  color: #808080;
`;

const Nav = observer((props) => {
  const {
    location: { pathname },
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userListStore } = useStores();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const wrapperRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = (event) => {
  //   if (wrapperRef && !wrapperRef.current.contains(event.target)) {
  //   } else {
  //     setIsModalOpen(false);
  //   }
  // };

  return (
    <Header>
      <List>
        <Item>
          <SLink selected={pathname === "/"} to="/">
            소개
          </SLink>
        </Item>
        <Item>
          <SLink selected={pathname.includes("/tv")} to="/tv">
            TV프로그램
          </SLink>
        </Item>

        <Item>
          <SLink selected={pathname.includes("/movie")} to="/movie">
            영화
          </SLink>
        </Item>
        <Item>
          <SLink selected={pathname.includes("/search")} to="/search">
            검색
          </SLink>
        </Item>
      </List>
      <LoginDiv>
        {userListStore.userList?.nickname ? (
          <LoginButton>내로그</LoginButton>
        ) : null}

        {userListStore.userList?.nickname ? (
          <LoginButton>
            {userListStore.userList.nickname} 님 안녕하세요!
          </LoginButton>
        ) : (
          <LoginButton onClick={openModal}>로그인</LoginButton>
        )}

        {isModalOpen ? (
          <SignIn
            isOpen={isModalOpen}
            close={closeModal}
            open={openModal}
          ></SignIn>
        ) : null}
      </LoginDiv>
    </Header>
  );
});

export default withRouter(Nav);
