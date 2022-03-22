import '../common/common.css';
import './jobViewDetail.css';
import './mobileJobViewDetail.css';

//ViewDetail 컴포넌트 JobViewDetail로 복사



function JobViewDetail() {
    return(
        <div className='view-detail inner-box'>
            <div id='outlineProcess' className='marginBottomStyle'>
                <h4 className="detailTitle">과정개요</h4>
                <div className="flexStyle">
                <ul className='outlineProcess-left'>
                        <li className='listSubtitle'>효율적인 교육 시스템을 통한<br></br>PRO 신입사원 만들기</li>
                        <li className='listText'>조직 내 신입사원으로서 올바른 역할 수행을 위한 마인드 함양과 직장 내 필요한 직무 중심적 커뮤니케이션 능력을 배양하는 과정입니다. 성공적인 직장생활을 위한 관리 방법을 습득하고 다양한 진단 활용, 자기 성찰을 통한 참여, 실습형 교육입니다.</li>
                    </ul>
                    <div className='outlineProcess-right'>
                        <ul className='iconList flexStyle'>
                            <li>
                                <img src="/images/viewdetail/student.png" alt="노트북 들고있는 아이콘" />
                                <p>교육/진단/성찰</p>
                            </li>
                            <li>
                                <img src="/images/viewdetail/right_arrow.png" alt="오른쪽 화살표" />
                            </li>
                            <li>
                                <img src="/images/viewdetail/presentation.png" alt="설명중인 아이콘" />
                                <p>PRO 신입사원</p>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
            <div id='processObjective' className='marginBottomStyle'>
                <h4 className="detailTitle">과정목표</h4>
                
                <div className="flexStyle">
                    <div className="processObjective-left
                    ">
                        <div className='listSubtitle'>사랑받는 신입사원으로 거듭나기</div>
                        <ul>
                        <li className='list-text'>조직의 발전과 자신의 성장을 위해 필요한 자기 주도적 태도의 중요성을 이해할 수 있습니다.</li>
                            <li className='list-text'>유형 진단을 통해 나와 타인의 다름을 인정하고, 타인과 맞춰갈 수 있는 행동적 특징을 파악할 수 있습니다.</li>
                            <li className='list-text'>논리적 사고를 통한 보고법을 습득하여 탁월한 팔로워의 역할을 수행하도록 합니다.</li>
                        </ul>
                    </div>
                    <div className='processObjective-right'>
                        <div className="flexStyle">
                            <img className='readingIcon' src="/images/viewdetail/read.png" alt="책 읽는 아이콘" />
                            <ul>
                                <li>
                                    <img src="/images/viewdetail/bulb.png" alt="전구 아이콘" />
                                    <p>셀프 리더십</p>
                                </li>
                                <li>
                                    <img src="/images/viewdetail/chat.png" alt="말풍선 아이콘" />
                                    <p>상사와 소통</p>
                                </li>
                                <li>
                                    <img src="/images/viewdetail/presentation_icon.png" alt="프레젠테이션 아이콘" />
                                    <p>논리적 보고</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='educationTarget' className='marginBottomStyle'>
                <h4 className="detailTitle">교육대상</h4>
                <ul className='targetList'>
                    <li>
                        <div className='listSubtitle'>예비강사 및 현업강사</div>
                        <div className='targetList-text'>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                    </li>
                    <li>
                        <div className='listSubtitle'>예비강사 및 현업강사</div>
                        <div className='targetList-text'>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                    </li>
                    <li>
                        <div className='listSubtitle'>예비강사 및 현업강사</div>
                        <div className='targetList-text'>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                    </li>
                </ul>
            </div>
            <div id='curriculum' className='marginBottomStyle'>
                <h4 className='detailTitle'>커리큘럼</h4>
                <div className='curriBox'>
                    <div className='curriTitle'>
                        <p>M1</p>
                        <p>자신과의 소통<br></br>(셀프 리더십)</p>
                    </div>
                    <div className='curriContents'>
                        <ul className='curriContentsList'>
                        <li>인생 주사위 게임</li>
                            <li>주도적 태도 의미 및 중요성</li>
                            <li>조직 및 자기 성장의 주도적 자세</li>
                            <li>Connecting the dots</li>
                            <li>효과적 발전을 위한 메타인지</li>
                        </ul>
                    </div>
                </div>
                <div className='curriBox'>
                    <div className='curriTitle'>
                        <p>M2</p>
                        <p>상사와 소통</p>
                    </div>
                    <div className='curriContents'>
                        <ul className='curriContentsList'>
                        <li>소통의 중요성 및 필요 자세</li>
                            <li>상사와의 소통 방해 요소 찾기</li>
                            <li>선입견 버리기</li>
                            <li>FACT 나의 소통 유형 진단</li>
                            <li>FACT 유형별 소통 특징</li>
                            <li>상사의 FACT 유형별 소통 대응 전략</li>
                        </ul>
                    </div>
                </div>
                <div className='curriBox'>
                    <div className='curriTitle'>
                        <p>M3</p>
                        <p>논리적 사고를<br/>통한<br/>보고 스킬</p>
                    </div>
                    <div className='curriContents'>
                        <ul className='curriContentsList'>
                        <li>상사 의중을 돕는 기본기 및 보고 스킬</li>
                            <li>논리적 사고 및 표현력 중요성</li>
                            <li>논리적 사고 및 보고 스킬 PREP</li>
                            <li>성장 및 성공 도모를 위한 실천 다짐</li>
                        </ul>
                    </div>
                </div>
            </div>{/* e: curriculum */}
            <div id='mainTutor' className='marginBottomStyle'>
                <h4 className='detailTitle'>대표강사</h4>
                <div className='mainTutorBox job'>
                    <div className='mainTutorLeft'>
                    <img src="/images/kim.png "alt="강사 이미지" />
                        <a href="#"><p>강사 인터뷰</p></a>
                    </div>{/* e: mainTutorLeft */}
                    <div className='mainTutorRight'>
                        <div className='mainTutorInfo'>
                            <p>참여식 강의로 Activity 하게!<br></br>명강사 양성을 위한 최고의 강의!</p>
                            <p><span>문제연</span> 강사</p>
                        </div>
                        <div className='mainTutorRigthBottom'>
                            <div className='mainTutorCareer'>
                                <p>경력</p>
                                <ul>
                                    <li>- 현 엑스퍼트컨설팅 전문강사</li>
                                    <li>- 문스피치커뮤니케이션 대표</li>
                                    <li>- LG 경영정보원</li>
                                    <li>- 뽀뽀뽀</li>
                                </ul>
                            </div>
                            <div className='mainTutorPlace'>
                                <p>주요강의처</p>
                                <ul>
                                    <li>- 현 엑스퍼트컨설팅 전문강사</li>
                                    <li>- 문스피치커뮤니케이션 대표</li>
                                    <li>- LG 경영정보원</li>
                                    <li>- 뽀뽀뽀</li>
                                </ul>
                            </div>
                        </div>{/* e: mainTutorBottom */}
                    </div>{/* e: mainTutorRight */}
                </div>{/* e: mainTutorBox */}
            </div>{/* e: mainTutor */}
            <div id='applyInfo' className='marginBottomStyle'>
                <h4 className='detailTitle'>접수안내</h4>
                <div className='applyInfoStepBox'>
                    <ul className='applyInfoStep'>
                        <li>회원가입</li>
                        <li>해당과정 신청</li>
                        <li>담당자 확인</li>
                        <li>결재 및 등록안내</li>
                    </ul>
                </div>
                <ul className='applyInfoList'>
                    <li>
                        <p>교육비</p>
                        <p>290,000원</p>
                    </li>
                    <li>
                        <p>할인정책</p>
                        <p>3인 단체: 4%</p>
                        <p>5인 단체: 10%</p>
                    </li>
                    <li>
                        <p>환급비</p>
                        <p>해당과정은<br></br>환급과정이 아닙니다.</p>
                    </li>
                </ul>
                <div className='applyInfoAsk'>
                    <img src="/images/viewdetail/CSR.png" alt="상담연결" />
                    <ul>
                        <li>전화 : 02-2152-3915~4</li>
                        <li>이메일 : open@exc.co.kr</li>
                        <li>카카오톡: 엑스퍼트아카데미</li>
                    </ul>
                    <a href="#">문의하기</a>
                </div>
            </div>{/* e: applyInfo */}
        </div>
    )
}

export default JobViewDetail;
