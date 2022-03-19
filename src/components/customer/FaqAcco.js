import React, { useState } from "react";
import './faq.css';
import { Collapse, CardBody, Card, CardHeader} from 'reactstrap';

export default function FaqAcco(props){
    const [toggleQuestion, setToggequestion] = useState(1);
    console.log(props.currentMenu)
    if(props.currentMenu === 0){
        return(
            <div className='wrapper inner-box'>
            <div className='accoBox accoMemberInfo'>
            <Card>
                <CardHeader onClick={() => setToggequestion(1)}>
                    <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p>연간 교육 일정표와 프로그램 안내서를 받으려면 어떻게 해야하나요?</p> 
                    </div>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                    <CardBody>
                    <div className='answerBox'>
                        <img src="/images/a.png" alt="답변" className='accoImg'/>
                        <p>
                            홈페이지 오른쪽 OPEN 이동 배너를 클릭하신 후 연간일정표를 다운로드 받을 수 있으며,<br/> 홈페이지 상단부
                            " 메뉴바 &gt; 프로그램 &gt; 전체보기 "를 클릭 하신 후 상단의 연간일정표 및 프로그램 안내서를 다운받을 수 있습니다.
                        </p>
                    </div>
                    </CardBody>
                </Collapse>
            </Card>
            <Card>
                <CardHeader onClick={() => setToggequestion(2)}>
                    <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p> 수강하고 싶은 과정의 프로그램 안내서를 별도로 받으려면 어떻게 하나요?</p>
                    </div>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                    <CardBody>
                        <div className='answerBox'>
                            <img src="/images/a.png" alt="답변" className='accoImg'/>
                            <p>
                            홈페이지 상단부 " 메뉴바 &gt; 프로그램 &gt; 전체보기 " 또는 "HRD,영업 등 카테고리 &gt; 과정 이미지"를
                            클릭 하신 후 과정 이미지 오른쪽에 과정안내서를 다운받을 수 있습니다.
                            </p>
                        </div>
                    
                    </CardBody>
                    
                    
                </Collapse>
            </Card>
            <Card>
                <CardHeader onClick={() => setToggequestion(3)}>
                    <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p>듣고 싶은 교육 과정이 없는데 요청을 할 경우 별도로 과정 개설이 가능한가요?</p> 
                    </div>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                    <CardBody>
                        <div className='answerBox'>
                            <img src="/images/a.png" alt="답변" className='accoImg'/>
                            <p>
                                네, 교육인원이 6명 이상일 경우 원하시는 교육을 해당 일정에 개강 해드립니다. <br/>
                                교육인원이 적을 경우 홈페이지 상단부 "메뉴바 &gt; 커뮤니티 &gt; 교육 만들기 게시판"에
                                듣고 싶은 과정을 작성해주시면, 다른 교육생의 추가 신청이 있을 경우, 해당 과정을 개강해 드립니다.
                            </p>
                        </div>
                    </CardBody>
                </Collapse>
            </Card>
        </div>
        </div>
        )// e: accoMemberInfo
    }else if(props.currentMenu === 1){
        return(
            <div className='wrapper inner-box'>
            <div className='accoBox accoPay'>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>홈페이지 내 모든 과정이 고용 보험 환급 과정인가요?</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                홈페이지 내 모든 프로그램이 고용 보험 환급 과정은 아닙니다. 고용 보험 환급 과정은 프로그램 이미지 또는
                                안내서에 '환급과정'이라고 표기가 되어있습니다.
                                </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p> 고용 보험 적용이 되면 무료로 교육을 받을 수 있나요?</p>
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                고용보험 환급과정은 고용보험을 납부하는 회사가 자사의 근로자를 대상으로 교육비를 지원하여
                                교육을 위탁하고 교육 수료 후 회사가 교육비의 일부를 노동부로부터 환급 받는 교육 입니다. <br/>
                                고용보험 적용과정이라고 하더라도 우선 교육비를 입금하시고 교육 후 노동부로부터
                                교육비의 일부를 환급 받으실 수 있습니다.
                                </p>
                            </div>
                        
                        </CardBody>
                        
                        
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>고용 보험 환급 비용을 알고 싶습니다.</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>                                    	
                                    홈페이지 우측 “QUICK MENU&gt;고용보험환급“을 클릭하시면 해당 과정의 예상 환급 금액을 확인할 수 있습니다.
                                </p>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(4)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>고용 보험 환급 과정의 수료 기준을 알고 싶습니다.</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 4 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                            <img src="/images/a.png" alt="답변" className='accoImg'/>
                            <p>
                                하루 6.4H 이상, 해당 교육시간의 80% 이상을 출석하셔야 수료가 가능하며 수료증이 발급됩니다.
                            </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </div>
            </div>  
        )// e: accoPay
    }else if(props.currentMenu === 2){
        return(
            <div className='wrapper inner-box'>
            <div className='accoBox accoRefund'>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>	교육 당일 준비물은 무엇인가요?</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                기본적인 교육 준비물은 명함이며, 고용 보험 환급과정의 경우 QR출석을 원칙으로 하여 스마트폰을 지참해야 합니다. 	
                                <br/>&#40;스마트폰이 아닌 경우 담당자에게 사전 연락 부탁 드립니다.&#41;
                                </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p> 	점심 식사는 제공이 되나요?</p>
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                8H 이상의 교육 과정은 교육비에 교재비, 식비가 모두 포함되어 있습니다.
                                </p>
                            </div>
                        
                        </CardBody>
                        
                        
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>듣고 싶은 교육 과정이 없는데 요청을 할 경우 별도로 과정 개설이 가능한가요?</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                    네, 교육인원이 6명 이상일 경우 원하시는 교육을 해당 일정에 개강 해드립니다. <br/>
                                    교육인원이 적을 경우 홈페이지 상단부 "메뉴바 &gt; 커뮤니티 &gt; 교육 만들기 게시판"에
                                    듣고 싶은 과정을 작성해주시면, 다른 교육생의 추가 신청이 있을 경우, 해당 과정을 개강해 드립니다.
                                </p>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </div>
            </div>  
        )// e: accoPay
    }else if(props.currentMenu === 3){
        return(
            <div className='wrapper inner-box'>
            <div className='accoBox accoApply'>
                <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>교육 신청 시 로그인을 필수로 해야 하나요?</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                네, 간단한 회원 등록 후 수강신청을 하시면 기본 정보를 바탕으로 간편하게 수강신청을 하실 수 있습니다.
                                </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p> 	수료증을 분실하였습니다. 재발급도 가능한가요?</p>
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                수료 과정명과 일정을 아래 담당자에게 말씀해주시면 재발급이 가능합니다. <br/> ▷ 교육담당자: 02-2152-3915
                                </p>
                            </div>
                        
                        </CardBody>
                        
                        
                    </Collapse>
                </Card>
               
            </div>
            </div>  
        )// e: accoApply
    }else if(props.currentMenu === 4){
        return(
            <div className='wrapper inner-box'>
            <div className='accoBox accoEtc'>
            <Card>
                    <CardHeader onClick={() => setToggequestion(1)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>홈페이지 내 모든 과정이 고용 보험 환급 과정인가요?</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                홈페이지 내 모든 프로그램이 고용 보험 환급 과정은 아닙니다. 고용 보험 환급 과정은 프로그램 이미지 또는
안내서에 '환급과정'이라고 표기가 되어있습니다.
                                </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(2)}>
                        <div className="questionBox">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        <p> 고용 보험 적용이 되면 무료로 교육을 받을 수 있나요?</p>
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                고용보험 환급과정은 고용보험을 납부하는 회사가 자사의 근로자를 대상으로 교육비를 지원하여
교육을 위탁하고 교육 수료 후 회사가 교육비의 일부를 노동부로부터 환급 받는 교육 입니다.
고용보험 적용과정이라고 하더라도 우선 교육비를 입금하시고 교육 후 노동부로부터
교육비의 일부를 환급 받으실 수 있습니다.
                                </p>
                            </div>
                        
                        </CardBody>
                        
                        
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(3)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>고용 보험 환급 비용을 알고 싶습니다.</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                        <CardBody>
                            <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
홈페이지 우측 “QUICK MENU&gt;고용보험환급“을 클릭하시면 해당 과정의 예상 환급 금액을 확인할 수 있습니다.
                                </p>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
                <Card>
                    <CardHeader onClick={() => setToggequestion(4)}>
                        <div className="questionBox">
                            <img src="/images/q.png" alt="질문" className='accoImg'/>
                            <p>고용 보험 환급 과정의 수료 기준을 알고 싶습니다.</p> 
                        </div>
                    </CardHeader>
                    <Collapse  isOpen={toggleQuestion === 4 ? true : false}>
                        <CardBody>
                        <div className='answerBox'>
                                <img src="/images/a.png" alt="답변" className='accoImg'/>
                                <p>
                                하루 6.4H 이상, 해당 교육시간의 80% 이상을 출석하셔야 수료가 가능하며 수료증이 발급됩니다.
                                </p>
                        </div>
                        </CardBody>
                    </Collapse>
                </Card>
               
            </div>
            </div>  
        )// e: accoPay
    }// e: accoEtc       
}