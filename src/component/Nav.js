import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    height: 30px;
    z-index: 1;

    /* Animations */
    transition-timing-function: ease-in;
    transition:all 0.5s;
`

const Log = styled.img`
    position: fixed;
    left: 20px;
    margin-top: -10px;
    width: 80px;
    object-fit: contain;
`

const Avatar = styled.img`
position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
`

function Nav (){
    return(
        <Container>
            <Log src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"/>
            <Avatar src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"/>
        </Container>
    );
}

export default Nav;