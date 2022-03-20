import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "./hook";
import { useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 0px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;
const KakaoIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 24px;
`;

// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
  width: 35px;
  height: 35px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;

function ShareBtn() {
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  const currentUrl = window.location.href;

  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("b0a773a06e8c0df12635b0d6bd481202");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <FlexContainer>
      <GridContainer>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={35} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={35} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={"/images/kakaoimg.png"}></KakaoIcon>
        </KakaoShareButton>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
      </GridContainer>
    </FlexContainer>
  );
}

export default ShareBtn;
