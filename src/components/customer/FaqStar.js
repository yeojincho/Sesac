import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  return (
    <Wrap>
      <RatingText>보고 계신 답변에 얼마나 만족하시나요? 별점을 남겨주세요!</RatingText>
      <Stars className='faqStar'>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="25"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
        
      </Stars>
      <RatingBtn onClick={()=>{alert('별점이 등록되었습니다.')}}>별점 남기기</RatingBtn>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin: 0 0 150px 60px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 16px;
  padding-left: 10px;
  border-left: 2px solid #5ebf92;
  

`;

const Stars = styled.div`
  display: flex;
  padding-top: 20px;

  & svg {
    fill: gray;
    cursor: pointer;
  }

  :hover svg {
    fill: #fcc419;
  }

  & svg:hover ~ svg {
    fill: gray;
  }

  .yellowStar {
    fill: #fcc419;
  }
`;

const RatingBtn = styled.button`
  color: #636363;
  font-size: 14px;
  width: 110px;
  height:30px;
  border: 1px solid #5ebf92;
  border-radius: 5px;
  margin-top: 15px;

  :hover{
    background-color : #5ebf92;
    opacity: 0.8;
  }
`