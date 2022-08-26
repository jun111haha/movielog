import React from "react";
import styled from "styled-components";
import Loading from "../../../component/Loading";
import YouTube from "react-youtube";
import Nav from "../../../component/Nav";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh);
  position: relative;
`;

const ContainerInner = styled.div`
  padding: 100px 100px;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  color: #ffff;
  font-weight: bold;
  margin-left: 10px;
  z-index: 21;
`;

// const Year = styled.span`
//   padding: 0px 5px;
//   color: white;
//   font-size: 3rem;
//   font-weight: 600;
//   margin-bottom: 10px;
//   display: flex;
// `;

// const Divider = styled.span`
//   margin: 0px 5px;
//   font-size: 40px;
// `;

// const VideoContent = styled.div`
//   position: absolute;
//   left: 55%;
//   top: 66%;
//   transform: translate(-50%, -50%);
//   @media (max-width: 768px) {
//     width: 700px;
//   }
// `;

const VideoContent = styled.div`
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 700px;
  }
`;

const opts = {
  width: "700",
  height: "400",
  playerVars: {
    autoplay: 1, // 자동재생 1
    modestbranding: 1,
    origin: window.location.href,
  },
};

const DetailPresenterComponent = (props) => {
  const { backgroundImage, imgContent, title, genres, overView, video } = props;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>상세 페이지</title>
        </Helmet>
      </HelmetProvider>
      <Container>
        <Nav />
        {props.loading ? (
          <Loading />
        ) : (
          <>
            {backgroundImage}

            <ContainerInner>
              {imgContent}

              <Content>
                {title}
                {genres}
                {overView}
                <VideoContent>
                  {video?.results.length > 0 && (
                    <YouTube
                      videoId={video.results[0].key}
                      opts={opts}
                      //이벤트 리스너
                      onEnd={(e) => {
                        e.target.stopVideo(0);
                      }}
                    />
                  )}
                </VideoContent>
              </Content>
            </ContainerInner>
          </>
        )}
      </Container>
    </>
  );
};

export default DetailPresenterComponent;
