import React, { useEffect } from "react";
import styled from "styled-components";
import kakologo from "../assets/kakao--logo.png";

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const LoginModal = styled.div`
  width: 480px;
  height: 300px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #e0e0e0;
`;

const Close = styled.span`
  float: right;
  font-size: 25px;
  color: black;
`;

const ModalContents = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialBox = styled.div`
  margin-bottom: 20px;
`;

const KaKao = styled.button`
  background-color: #feec34;
  border-color: #feec34;
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 3px;
  justify-content: center;
`;

const KaKaoLogo = styled.img`
  width: 24px;
  height: 25px;
  margin: 10px;
`;

const KaKaoText = styled.div`
  width: 350px;
  font-size: 15px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  color: black;
`;

const SignInIcon = styled.div`
  width: 150px;
  margin: 0 auto;
`;

const SignIn = ({ isOpen, close, open }) => {
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
    <>
      {isOpen ? (
        <Modal>
          <LoginModal>
            <Close onClick={close}>&times;</Close>
            <ModalContents onClick={open}>
              <SignInIcon />
              <LoginMid>
                <SocialBox>
                  <KaKao>
                    <KaKaoLogo src={kakologo} />
                    <KaKaoText>카카오 계정으로 시작하기</KaKaoText>
                  </KaKao>
                </SocialBox>
              </LoginMid>
            </ModalContents>
          </LoginModal>
        </Modal>
      ) : null}
    </>
  );
};

export default SignIn;
