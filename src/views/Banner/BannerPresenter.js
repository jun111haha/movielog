import React from "react";
import styled from 'styled-components';
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
    background-image: ${(props) => `url("https://image.tmdb.org/t/p/original/${props.backdropPath}")`};
    color:#e6e6e6;
    object-fit: contain;
    height: 700px;
    background-size: cover;
    background-position : center center;
`;

const BannerContents = styled.div`
    margin-left: 30px;
    padding-top:140px;
    height: 190px;
`;

const BannerTitle = styled.h1`
    margin : 10px;
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;;
`;

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
`;

const BannerDescription = styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top:1rem;
    font-size:1rem;
    max-width: 360px;
    height:80px;
    margin:20px;
`;

const BannerButtonGroup = styled.div`
    width: 90%;
    margin: 10px;
    display: flex;
`;

const BannerFadeBottom = styled.div`
    height: 23.1rem;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)
`;

function truncate(str, n) {
        
    if(str){
        return str.length > n ? str.substr(0, n - 1) + ".." : str;
    }else{
        return "설명이 없습니다.";    
    }

  }

const BannerPresenter = (props) => {
    return(
        <>
        {
            props.loading ?
            <div className={"iconArea"}>
                <CircularProgress />
            </div>
            :

            <Container backdropPath={props.movie.backdrop_path}> 
                <BannerContents>
                    <BannerTitle>
                        {props.movie.title || props.movie.name || props.movie.original_name}
                    </BannerTitle>

                    <BannerButtonGroup>
                        <BannerButton>play</BannerButton>
                        <BannerButton>List</BannerButton>
                    </BannerButtonGroup>
                        
                        <BannerDescription>

                            {truncate(props.movie.overview, 300)}

                        </BannerDescription>
                        
                </BannerContents>
                <BannerFadeBottom/>
            </Container>
        }
        </>
    )
}

export default BannerPresenter;