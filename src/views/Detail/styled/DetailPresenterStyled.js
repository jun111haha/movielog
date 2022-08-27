import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

export const ImgContent = styled.div`
  margin-top: -30px;
  margin-left: -70px;
  width: 40%;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 20;
`;

export const Title = styled.h1`
  padding: 0px 5px;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
`;

// const Year = styled.span`
//   padding: 0px 5px;
//   color: white;
//   font-size: 3rem;
//   font-weight: 600;
//   margin-bottom: 10px;
//   display: flex;
// `;

export const Genres = styled.div`
  padding: 0px 10px;
  color: white;
  margin-bottom: 10px;
  display: flex;
`;

export const OverView = styled.h1`
  padding: 0px 10px;
  line-height: 1.3;
  font-size: 1rem;
  max-width: 900px;
  height: 80px;
  margin-bottom: 50px;
`;

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
