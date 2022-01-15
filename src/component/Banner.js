import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
    color:white;
    object-fit: contain;
    height: 448px;
`;

const BannerContents = styled.div`
    margin-left: 30px;
    padding-top:140px;
    height: 190px;
`

const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;;
`

const BannerButton = styled.div`
    cursor:pointer;
    color:#fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);    
    &:hover{
        color:#000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`

const BannerDescription = styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top:1rem;
    font-size:0.8rem;
    max-width: 360px;
    height:80px;
`

const BannerButtonGroup = styled.div`
    width: 90%;
    margin: 10px;
    display: flex;
`
const BannerFadeBottom = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)
`



function Banner(){
    return(
        <div>
            <Container>
                <BannerContents>
                    <BannerTitle>
                        타이틀
                    </BannerTitle>
                    <BannerButtonGroup>
                        <BannerButton>play</BannerButton>
                        <BannerButton>List</BannerButton>
                    </BannerButtonGroup>
                    <BannerDescription>
                        배너 설명창
                    </BannerDescription>
                </BannerContents>
                <BannerFadeBottom></BannerFadeBottom>
            </Container>
        </div>
    );
}

export default Banner;