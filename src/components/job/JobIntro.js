import React from "react";
import './jobintro.css'


export default function JobIntro() {
    return(
        <div className="inner-box">
            <div className='jobIntroBox'>
                <div className='jobIntroTitle'>
                    <h3>엑스퍼트아카데미만의 차별화된 취업과정을 소개합니다.</h3>
                </div>
                <div className='jobIntroContents'>
                    <dl>
                    <dt>[취업과정 전문분야]</dt>
                        <dd>프론트엔드 / 백엔드 / 빅데이터 / UIUX / 디지털 마케팅 등
                            IT분야 디지털 인재 양성을 위해 다양한 취업교육을 진행하고 있습니다.
                        </dd>
                    </dl>
                    <dl>
                    <dt>[다수 전문 강사진 보유]</dt>
                        <dd>
                        석박사 출신 현업 경력 15년 이상의 전문 강사진으로 구성되어 있습니다.
                        </dd>
                    </dl>
                    <dl>
                    <dt>[취업교육 전문 운영진으로 구성]</dt>
                        <dd>
                        취업교육을 전문으로 책임지는 운영 매니저들로 구성돼 체계적으로 운영합니다.
                        </dd>
                    </dl>
                </div>
                
            </div>
        </div>
    )
}
