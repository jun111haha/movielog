import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => `https://image.tmdb.org/t/p/original/${props.backdropPath}`});
    height: 300px;
    background-size: cover;
    border-radius: 10px;
    margin-bottom: 10px;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8); 
    color: #f1f1f1;
    width: 100%;
    transition: .5s ease-in-out;
    opacity:0;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
`;


const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        cursor: pointer;
        ${Rating}{
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    color: #ffff;
    display: block;
    font-size: 17px;
    margin-bottom: 5px;
`;

const Year = styled.span`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({id, imageUrl, title, year}) => {
    return(
        <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl} />
        </ImageContainer>
        <Title>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Title>
        <Year>{year}</Year>
    </Container>
    );
}

export default Poster;