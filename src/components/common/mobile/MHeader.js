import React from 'react';
import { Link } from "react-router-dom";
import '../header.css';

export default function MHeader({open}) {
  return (
		<div className="m-header" >
			<div className="m-header-cont main">
				<Link to="/" className="btn-gnb-main"><img src="/images/logo.png" alt="엑스퍼트아카데미" /></Link>
				<a href="#" className="btn-gnb-menu btn" onClick={open}><img src="/images/main/mobile-menu.png" alt="전체메뉴" /></a>
			</div>
		</div>
  )
}
