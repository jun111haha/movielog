/* eslint-disable */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  color: ${(props) => (props.selected ? "red" : "#808080")};
  padding: 15px 20px;
  &:hover {
    color: red;
    transition: 0.5s;
    transform: scale(1.5);
    opacity: 1;
  }
`;

const Item = styled.li`
  margin: 15px;
  transition: all 0.2s ease-in-out;
  color: ${(props) => (props.selected ? "red" : "#808080")};
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Header = styled.header`
//   position: flex;
//   display: flex;
//   padding: 0px 30px;
//   width: 100%;
//   height: 100%;
//   align-items: center;
//   z-index: 10;
//   box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
// `;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 600px;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const PageHeader = ({ location: { pathname } }) => {
  return (
    <Container>
      <Header>
        <List>
          <Item>
            <SLink selected={pathname === "/tv"} to="/tv">
              현재 상영중인 프로그램
            </SLink>
          </Item>
        </List>

        <List>
          <Item>
            <SLink selected={pathname === "/tv/popular-tv"} to="/tv/popular-tv">
              인기방영 프로그램
            </SLink>
          </Item>
        </List>

        <List>
          <Item>
            <SLink selected={pathname === "/tv/top-rated"} to="/tv/top-rated">
              순위별 프로그램
            </SLink>
          </Item>
        </List>
      </Header>
    </Container>
  );
};

export default withRouter(PageHeader);
