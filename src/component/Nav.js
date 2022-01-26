import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

const SLink  = styled(Link)`
  padding: 15px 20px;
  color: ${props => props.current ? "white" : "gray"};
  border-bottom: 4px solid 
  ${props => props.current ? "white" : "transparent"};
`;

const SItem  = styled.li`
  text-align: center;
`;

const SList  = styled.ul`
    display: flex;
`;

const SHeader  = styled.header`
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

    const{

        location : {pathname},

    } = props;

    return(
        <>
            <SHeader >

                <SList>
                    <SItem>
                         <SLink current={false} to="/">소개</SLink>                       
                    </SItem>             
                </SList>

                <SList>
                    <SItem>
                         <SLink current={pathname === "/tv"} to="/tv">TV프로그램</SLink>                       
                    </SItem>             
                </SList>

                <SList>
                    <SItem>
                         <SLink current={pathname === "/home"} to="/home">영화</SLink>                       
                    </SItem>             
                </SList>

            </SHeader>
        </>
    )

}

export default withRouter(Nav);