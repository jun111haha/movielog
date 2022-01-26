import React  from "react";
import styled from 'styled-components';

const ImgBox = styled.div`
  width: 220px;
  height: 280px;
  margin-bottom: 50px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
  }
`;

const Img = styled.img`
    background:url(${props => `https://image.tmdb.org/t/p/w500${props.bgUrl}`});
    width:100%;
    height:100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    backgorund-size: 100% 100%;

`;

const Rating = styled.p`
  color: #dcdcdc;
`

const Name = styled.h2`
   font-family: "Apple Gothic B";
   color: #dcdcdc;
   font-weight: 500px;
   font-size: 1.1rem;
`


const Poster = ({index, imgUrl, title, rating}) => {
    return(
        <>
            <ImgBox index = {index}>
                <Img bgUrl = {imgUrl}/>
                <Name>{title}</Name>
                <Rating>⭐: {rating}</Rating>
            </ImgBox>
        </>
    )
}

export default Poster;