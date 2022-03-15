import React from 'react'
import '../header.css';

export default function MHeader({open}) {
  return (
		<div class="m-header" >
			<div class="m-header-cont main">
				<a href="/" class="btn-gnb-main"><img src="/images/logo.png" alt="엑스퍼트아카데미" /></a>
				<a href="#" class="btn-gnb-menu btn" onClick={open}><img src="/images/main/mobile-menu.png" alt="전체메뉴" /></a>
			</div>
		</div>
  )
}
