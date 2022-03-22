import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DetailPg.css";

function Detail() {
  //title animation
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <div className='DetailPg-main'>
      <animated.h1 style={titleAnimation} className='DetailPg-title'>
        HR샵 문의하기 \ 자주하는 질문
      </animated.h1>
      <div className='qaContentsBox'>
        <div className='DetailPg-accordion'>
          <Accordion
            title='- MODULE_NOT_FOUND 가 뜨는데 어떡하나요?'
            text='Error: Cannot find module ㅇㅇㅇ이 경고인경우 혹시 dialogflow.js 이페이지 위에 const dialogflow =  require(ㅇㅇㅇ)이 부분을 생략하신게 아닌가 확인해보시기 바랍니다.'
          />
          <Accordion
            title='- npm install이 안되는데 이유가 뭘까요?'
            text='현재 보니깐 ㅇㅇㅇ이 설치되어있지 않아서 에러가 난다고 나오는데 npm install --global --production windows-build-tools 이 명령어 한번 사용해봐주세요'
          />
          <Accordion
            title='- 주어진 url주소로 figma파일을 어떻게 다운받아야 하나요?'
            text='드라이브에서 파일을 다운 받으시거나 첨부파일에 추가된 .fig파일을 다운 받으시거나 Figma 링크를 통해 받으실 수 있습니다.'
          />
          <Accordion
            title='- MODULE_NOT_FOUND 가 뜨는데 어떡하나요?'
            text='Error: Cannot find module ㅇㅇㅇ이 경고인경우 혹시 dialogflow.js 이페이지 위에 const dialogflow =  require(ㅇㅇㅇ)이 부분을 생략하신게 아닌가 확인해보시기 바랍니다.'
          />
          <Accordion
            title='- npm install이 안되는데 이유가 뭘까요?'
            text='현재 보니깐 ㅇㅇㅇ이 설치되어있지 않아서 에러가 난다고 나오는데 npm install --global --production windows-build-tools 이 명령어 한번 사용해봐주세요'
          />
          <Accordion
            title='- npm install이 안되는데 이유가 뭘까요?'
            text='현재 보니깐 ㅇㅇㅇ이 설치되어있지 않아서 에러가 난다고 나오는데 npm install --global --production windows-build-tools 이 명령어 한번 사용해봐주세요'
          />
          <Accordion
            title='- npm install이 안되는데 이유가 뭘까요?'
            text='현재 보니깐 ㅇㅇㅇ이 설치되어있지 않아서 에러가 난다고 나오는데 npm install --global --production windows-build-tools 이 명령어 한번 사용해봐주세요'
          />
        </div>
      </div>
    </div>
  );
}

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#d9c387" : "#727272",
      fontWeight: 700,
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "120" },
  });

  return (
    <animated.div className='accordion__item' style={openAnimation}>
      <div className='accordion__header' onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      <p className='accordion__content'>{props.text}</p>
    </animated.div>
  );
}

export default Detail;
