import '../common/common.css';
import './view-details.css';


// Curriculum.js 파일에 component 형식으로 들어갈 예정
// 탭 아래 컨텐츠 부분만 작성
// css 시작하기 전 이미 작성된 className들은 영어로 변경
// className은 최소한의 것만 작성하고 전부 비워뒀으니 각자 편한 방식으로 기입해서 사용
// 마크업 수정 편한 대로!

function ViewDetails() {
    return(
        <div className='view-details'>
            <div className='과정개요'>
                <h4>과정개요</h4>
                <div>
                    <p>조직 내 신입사원으로서 올바른 역할 수행을 위한 마인드 함양과 직장 내 필요한 직무 중심적 커뮤니케이션 능력을 배양하는 과정입니다. 성공적인 직장생활을 위한 관리 방법을 습득하고 다양한 진단 활용, 자기 성찰을 통한 참여, 실습형 교육입니다.</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <p>효율적인 교육 시스템을 통한 PRO 신입사원 만들기</p>
                </div>
            </div>
            <div className='과정목표'>
                <h4>과정목표</h4>
                <div>
                    <ul>
                        <li>조직의 발전과 자신의 성장을 위해 필요한 자기 주도적 태도의 중요성을 이해할 수 있습니다.</li>
                        <li>유형 진단을 통해 나와 타인의 다름을 인정하고, 타인과 맞춰갈 수 있는 행동적 특징을 파악할 수 있습니다.</li>
                        <li>논리적 사고를 통한 보고법을 습득하여 탁월한 팔로워의 역할을 수행하도록 합니다.</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p>사랑받는 신입사원으로 거듭나기</p>
                        <p>Self Motivation 워라밸 실행<br></br>유형별 소통 대응 전략 달인</p>
                    </div>
                </div>
                <div></div> {/* 아이콘 제작? */}
            </div>
            <div className='교육대상'>
                <h4>교육대상</h4>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <div>예비강사 및 현업강사</div>
                            <div>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                        </li>
                        <li>
                            <div>예비강사 및 현업강사</div>
                            <div>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                        </li>
                        <li>
                            <div>예비강사 및 현업강사</div>
                            <div>전문강사 활동을 희망하고<br></br>강의스킬을 올리고 싶은 분</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='커리큘럼'>
                <h4>커리큘럼</h4>
                <div>
                    <div>M1</div>
                    <div>사내강사의<br></br>역할과 자세</div>
                </div>
                <div>
                    <p>사내강사의 역할과 자세</p>
                    <ul>
                        <li>강사 소개 학습자간 인사</li>
                        <li>강사 소개 학습자간 인사</li>
                        <li>강사 소개 학습자간 인사</li>
                        <li>강사 소개 학습자간 인사</li>
                        <li>강사 소개 학습자간 인사</li>
                    </ul>
                </div>
                {/* 아래 부분은 착각하고 스토리보드가 아니라 모집요강 ppt 보면서 작성한 부분. 스토리보드에 기재된 커리큘럼 부분은 형식이 좀 애매한 것 같아서 혹시 몰라 삭제가 아닌 주석으로 처리 */}
                {/* 
                <table>
                    <thead>
                        <tr>
                            <th>교육 주제</th>
                            <th>주요 내용</th>
                            <th>방법</th>
                            <th>시간</th>
                            <th>EXAMPLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>자신과의 소통<br></br>(셀프 리더십)</td>
                            <td>
                                <ul>
                                    <li>인생 주사위 게임</li>
                                    <li>주도적 태도 의미 및 중요성</li>
                                    <li>조직 및 자기 성장의 주도적 자세</li>
                                    <li>Connecting the dots</li>
                                    <li>인생 그래프</li>
                                    <li>효과적 발전을 위한 메타인지</li>
                                </ul>
                            </td>
                            <td>강의 실습 진단 게임</td>
                            <td>2.0</td>
                            <td>
                                <img src="" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>자신과의 소통<br></br>(셀프 리더십)</td>
                            <td>
                                <ul>
                                    <li>인생 주사위 게임</li>
                                    <li>주도적 태도 의미 및 중요성</li>
                                    <li>조직 및 자기 성장의 주도적 자세</li>
                                    <li>Connecting the dots</li>
                                    <li>인생 그래프</li>
                                    <li>효과적 발전을 위한 메타인지</li>
                                </ul>
                            </td>
                            <td>강의 실습 진단 게임</td>
                            <td>2.0</td>
                            <td>
                                <img src="" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>자신과의 소통<br></br>(셀프 리더십)</td>
                            <td>
                                <ul>
                                    <li>인생 주사위 게임</li>
                                    <li>주도적 태도 의미 및 중요성</li>
                                    <li>조직 및 자기 성장의 주도적 자세</li>
                                    <li>Connecting the dots</li>
                                    <li>인생 그래프</li>
                                    <li>효과적 발전을 위한 메타인지</li>
                                </ul>
                            </td>
                            <td>강의 실습 진단 게임</td>
                            <td>2.0</td>
                            <td>
                                <img src="" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>본 교육은 모듈화 되어 있어 기업이 원하는 맞춤형 교육(일정 및 내용)으로 진행 가능 합니다.</p>
    */}
            </div>
            <div className='대표강사'>
                <h4>대표강사</h4>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p><a href="#">강사 인터뷰</a></p>
                    </div>
                    <div>
                        <div>
                            <p>참여식 강의로 Activity 하게!<br></br>명강사 양성을 위한 최고의 강의!</p>
                            <p><span>문제연</span> 강사</p>
                        </div>
                        <div>
                            <div>
                                <p>경력</p>
                                <ul>
                                    <li>현 엑스퍼트컨설팅 전문강사</li>
                                    <li>문스피치커뮤니케이션 대표</li>
                                    <li>LG 경영정보원</li>
                                    <li>뽀뽀뽀</li>
                                </ul>
                            </div>
                            <div>
                                <p>주요강의처</p>
                                <ul>
                                    <li>현 엑스퍼트컨설팅 전문강사</li>
                                    <li>문스피치커뮤니케이션 대표</li>
                                    <li>LG 경영정보원</li>
                                    <li>뽀뽀뽀</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='접수안내'>
                <ul>
                    <li>회원가입</li>
                    <li>해당과정 신청</li>
                    <li>담당자 확인</li>
                    <li>결재 및 등록<br></br>안내</li>
                </ul>
                <ul>
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
                <div>
                    <img src="" alt="" />
                    <ul>
                        <li>전화 : 02-2152-3915~4</li>
                        <li>이메일 : open@exc.co.kr</li>
                        <li>카카오톡: 엑스퍼트아카데미</li>
                    </ul>
                    <a href="#">문의하기</a>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails;