/* eslint-disable */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  padding: 15px 20px;
  color: ${(props) => (props.selected ? "#ffffff" : "#808080")};
  border-bottom: 4px solid
    ${(props) => (props.selected ? "#ffffff" : "transparent")};
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
  width: 98%;
  height: 55px;
  align-items: center;
  background-color: black;
  z-index: 10;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

const Nav = (props) => {
  const {
    location: { pathname },
  } = props;

  return (
    <>
      <Header>
        <List>
          <Item>
            <SLink selected={pathname === "/"} to="/">
              소개
            </SLink>
          </Item>
        </List>

        <List>
          <Item>
            <SLink selected={pathname === "/tv"} to="/tv">
              TV프로그램
            </SLink>
          </Item>
        </List>

        <List>
          <Item>
            <SLink selected={pathname === "/movie"} to="/movie">
              영화
            </SLink>
          </Item>
        </List>
      </Header>
    </>
  );
};

export default withRouter(Nav);
