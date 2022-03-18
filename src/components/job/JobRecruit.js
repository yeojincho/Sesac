import React from "react";
import './jobrecruit.css'
import { Link } from 'react-router-dom';
import JobHeader from './JobHeader';

export default function JobRecruit(){
    
    return(
        <div className="inner-box">
            <JobHeader />
            <main className="jobContents">
                <div className="jobContentsTop">
                    <div className="jobContentsBox jobContentsTopBox">
                        <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsTopBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsTopBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsTopBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                </div>
                <div className="jobContentsBottom">
                    <div className="jobContentsBox jobContentsBottomBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsBottomBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsBottomBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="jobContentsBox jobContentsBottomBox">
                    <Link to="/programDetail">
                        <img src="/images/job_programThumnail.png" alt="과정 썸네일" className="jobThumImg" />
                            
                            <dl className="thumText">
                                <dt className="thumTitle">파이썬을 통한 데이터 분석 및 앱개발 과정</dt>
                                <dd className="thumDate">2022.02.21-2022.03.25</dd>
                                <dd className="thumPeriod">3DAY 400H</dd>
                            </dl>
                        </Link>
                    </div>
                </div>
                    
                    
            </main>
        </div>
    )
}