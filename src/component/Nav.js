import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 10px;
    z-index: 1;
    background-color : black;

    transition-timing-function: ease-in;
    transition:all 0.5s;
`


const Nav = () => {

    return(
        <>
            <Container></Container>
        </>
    )

}

export default Nav;