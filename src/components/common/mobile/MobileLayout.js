import React from 'react';
import { useState } from 'react';

import MHeader from './MHeader';
import MFooter from './MFooter';
import Main from '../../main/Main';
import Menu from './Menu';



/* 
  신나는 반응형 웹 만들기
  1. 구조가 PC랑 너무 다르면 js새로 파는게 좋을듯^^ (css도 당연히 새로만들어야겠죠)
  2. 나는 PC에 쓰던거 그대로 쓸거다!크기만 좀 줄이면 된다! 하면 css에 분리시켜주면됨.아래참조

  @media screen and (min-width:768px){ 
    PC용 CSS는 여기에
  }
  @media screen and (max-width:767px){
    Mobile용 CSS는 여기에
  }

*/
export default function MobileLayout({isMobile}) {
  /* 전체 메뉴 팝업 */
  const [MenuPopOpen, setMenuPopOpen] = useState(false);
  const openMenuPopFn = ()=> setMenuPopOpen(true);
  const closeMenuPopFn = ()=> setMenuPopOpen(false);

  return (
    <>
      {
        !MenuPopOpen ? 
        <>
          <MHeader open={openMenuPopFn} />
              {/* 메인 */}
              <Main isMobile={isMobile}/>
              {/* 회원가입 */}
              {/* 공개과정 */}
              {/* 취업과정 */}
              {/* Ex콘텐츠 */}
              {/* 고객센터 */}
              {/* 아카데미 */}
              {/* 마이페이지 */}

          <MFooter />
        </>

        :

        <Menu close={closeMenuPopFn}/>
      }
    </>
  )
}
