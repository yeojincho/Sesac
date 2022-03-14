import React from 'react'

import '../footer.css';

export default function MFooter() {
  return (
    <div class="footer">
			<div class="footer-cont">
				<div class="footer-top-line">
					<ul class="footer-link-list">
						<li><a href="#none">공지사항</a></li>
						<li><a href="#none">이용약관</a></li>
						<li><a href="#none">개인정보처리방침</a></li>
						<li><a href="#none">청소년 보호정책</a></li>
						<li><a href="#none">제휴/제안</a></li>
					</ul>
					<ul class="footer-sns-list">
						<li><a href="#none"><img src="/images/main/ico_youtube.png" alt="youtube" /></a></li>
						<li><a href="#none"><img src="/images/main/ico_facebook.png" alt="facebook" /></a></li>
						<li><a href="#none"><img src="/images/main/ico_instagram.png" alt="instagram" /></a></li>
					</ul>
					<div class="footer-slt-box">
						<select>
							<option value="패밀리사이트" hidden="">패밀리사이트</option>
							<option value="">1</option>
							<option value="">2</option>
						</select>
					</div>
					<div class="footer-btm-area">
						<p class="btm-text-top">서울특별시 송파구 중대로121 롯데캐슬파인힐 2층(우편번호:05718)<br />02)2152-3915~4 /3934 (평일 09:00 ~ 18:00)<br />개인정보보호책임자 : 김세환<span>사업자등록번호 : 116-81-48332</span></p>
					</div>
				</div>
			</div>
		</div>
  )
}
