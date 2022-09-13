import React, { useEffect } from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../config/Oatuh";
import { ImBubble } from "react-icons/im";

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const LoginContainer = styled.div`
  ${({ theme }) => theme.flex.flexBox};
  height: 100vh;
`;

const LoginWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox("column")};
  width: 26.875rem;
  height: 28.125rem;
  border: 1px solid #e9ecef;
  background: rgba(20, 20, 20, 1);
`;

const Emoji = styled.div`
  margin-bottom: 2.5rem;
  font-size: 3rem;
  animation: rotate_image 0.3s linear 4 alternate;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(45deg);
    }
  }
`;

const Header = styled.header`
  margin-bottom: 0.7rem;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: white;
`;

const Article = styled.article`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const KakaoBtn = styled.button`
  ${({ theme }) => theme.flex.flexBox("", "center", "space-around")};
  width: 20rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const KakaoBubble = styled(ImBubble)`
  margin-bottom: 0.25rem;
`;

const SignIn = ({ modalRef }) => {
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Modal>
      <LoginContainer>
        <LoginWrapper ref={modalRef}>
          <Emoji>👋</Emoji>
          <Header>반갑습니다!</Header>
          <Article>영화의 모든것!</Article>
          <KakaoBtn onClick={kakaoLogin}>
            <KakaoBubble />
            <p>카카오로 바로 시작</p>
          </KakaoBtn>
        </LoginWrapper>
      </LoginContainer>
    </Modal>
  );
};

export default SignIn;
