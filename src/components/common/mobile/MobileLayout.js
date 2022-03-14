import React from 'react';

import MHeader from './MHeader';
import MFooter from './MFooter';
import Main from '../../main/Main';

export default function MobileLayout({isMobile}) {
  return (
    <>
      <MHeader />
          <Main isMobile={isMobile}/>
      <MFooter />
    </>
  )
}
