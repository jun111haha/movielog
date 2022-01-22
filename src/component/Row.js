import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Container = styled.div`
    margin-left: 20px;
    color: white;
`
const Posters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;

    &::-webkit-scrollbar{
        display:none;
    }
`


function Row(){
    return(
        <Container>
            <Posters>
            
            </Posters>
        </Container>

    );
}

export default Row;