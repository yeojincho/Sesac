import React, { useState } from "react";
import './faq.css';
import { Collapse, CardBody, Card, CardHeader} from 'reactstrap';

export default function FaqAcco(){
    const [toggleQuestion, setToggequestion] = useState(1);
    return(
        
        <div className='wrapper inner-box'>
            <div className='accoBox'>
            <Card>
                <CardHeader onClick={() => setToggequestion(1)}>
                    <span className="font-weight-bold">
                        <img src="/images/q.png" alt="질문" className='accoImg'/>
                        연간 교육 일정표와 프로그램 안내서를 받으려면 어떻게 해야하나요?
                    </span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
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
                <CardHeader onClick={() => setToggequestion(2)}>
                    <span className="font-weight-bold">
                    <img src="/images/q.png" alt="질문" className='accoImg'/>
                        수강하고 싶은 과정의 프로그램 안내서를 별도로 받으려면 어떻게 하나요?
                    </span>
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
                    <span className="font-weight-bold">
                    <img src="/images/q.png" alt="질문" className='accoImg'/>
                    듣고 싶은 교육 과정이 없는데 요청을 할 경우 별도로 과정 개설이 가능한가요?
                    </span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
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
            </div>
                        
        </div>
    )
}