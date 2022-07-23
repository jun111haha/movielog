/* eslint-disable */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";
import SearchContainer from "../views/Search/SearchContainer";

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
  background-color: black;
  z-index: 10;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  text-shadow: black 1px 1px 10px;
`;

const Nav = (props) => {
  const {
    location: { pathname },
  } = props;

  return (
    <Fragment>
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
            <SLink selected={pathname.includes("/tv")} to="/tv">
              TV프로그램
            </SLink>
          </Item>
        </List>

        <List>
          <Item>
            <SLink selected={pathname.includes("/movie")} to="/movie">
              영화
            </SLink>
          </Item>
        </List>
        <List>
          <Item>
            <SLink selected={pathname.includes("/search")} to="/search">
              검색
            </SLink>
          </Item>
        </List>
      </Header>
    </Fragment>
  );
};

export default withRouter(Nav);
