import React  from "react";
import styled from 'styled-components';
import StarRating from "./StarRating";


const Img = styled.img`
    background:url(${props => `https://image.tmdb.org/t/p/w500${props.bgUrl}`}) no-repeat center center;
    width:100%;
    height:100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    backgorund-size: 100% 100%;
    @media (max-width: 768px) {
      height: 220px;
    }
`;

const Rating = styled.div`
  font-size: 14px;
  color: #dcdcdc;
`;

const Container = styled.div`
  font-size: 12px;
  transition: 0.2s linear;
  width: 220px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 140px;
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
    cursor : pointer;
  }
`;

const Image = styled.div`
  background: url(${props => props.bgUrl}) no-repeat center center;
  background-size: cover;
  height: 340px;
  transition: 0.2s linear;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
`;

const Title = styled.div`
  color: white;
  font-size: 18px;
`;

const Poster = ({index, imgUrl, title, rating}) => {
    return(
        <Container>
          <ImageContainer>
          <Image
            bgUrl={
                imgUrl
                ? `https://image.tmdb.org/t/p/original/${imgUrl}`
                : require('../assets/noposter.png')
            }
          />
          </ImageContainer>
          <Items>
          <Title>
            {title && title.length > 15
              ? `${title.substring(0, 15)}...`
              : title}
          </Title>
          <Rating>
            <StarRating voteAverage={rating} /> ({rating})
          </Rating>
        </Items>
        </Container>
    )
}

export default Poster;