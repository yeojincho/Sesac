import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import HeadTitle from "./HeadTitle";
import "./Management.css";
import SideMenu from "./SideMenu";
import DaumPostcode from "react-daum-postcode";
import PopupPostCode from "./PopupPostCode";
import PopupDom from "./PopupDom";

function Management() {
  const user1 = { name: "강동원", id: "expert", gender: "남" };

  //주소input state
  const [address, setAddress] = useState("");

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="inner-box">
      <HeadTitle />
      <div className="flex-box">
        <SideMenu />
        <div className="Management-contentBox">
          <div className="Management-inform">
            <h2 className="pageTitle">회원정보 관리</h2>

            <h3 className="Management-infoTitle">필수정보</h3>
            <div className="mrgn-left">
              <strong className="manage-userinfo">
                성명: <span>{user1.name}</span>
              </strong>
              <strong className="manage-userinfo">
                아이디: <span>{user1.id}</span>
              </strong>
              <strong className="manage-userinfo">
                성별: <span>{user1.gender}</span>
              </strong>
            </div>

            <form className="Management-infoForm">
              <h3 className="Management-infoTitle">부가정보1</h3>
              <div className="mrgn-left">
                <label htmlFor="phone-number">휴대전화</label>
                <input
                  class="form-control col-sm-4"
                  id="phone-number"
                  type="tel"
                  placeholder="000-0000-0000"
                  aria-label="phone number"
                />

                <label htmlFor="mail-address"> 메일주소 </label>
                <input
                  class="form-control"
                  id="mail-address"
                  type="email"
                  placeholder="abc@expert.com"
                  aria-label="email address"
                />

                <label htmlFor="birthday"> 생년월일 </label>
                <input
                  class="form-control"
                  id="birthday"
                  type="date"
                  placeholder="0000/00/00"
                  aria-label="birthday"
                />

                <label htmlFor="user-division">회원구분</label>

                <select
                  class="form-select"
                  id="user-division"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    회원구분
                  </option>
                  <option value="teacher">교육담당자</option>
                  <option value="user">일반</option>
                </select>

                <label htmlFor="mailing-service">메일링서비스 : </label>
                <input
                  class="form-check-input"
                  id="mailing-service"
                  type="checkbox"
                  aria-label="check mailing service"
                />

                <label htmlFor="mailing-service">수신받음</label>
                <br />
              </div>

              <h3 className="Management-infoTitle">부가정보2</h3>
              <div className="mrgn-left">
                <label htmlFor="company-name">회사명</label>
                <input
                  class="form-control"
                  id="company-name"
                  type="text"
                  placeholder="소속된 회사를 입력해주세요"
                  aria-label="your company name"
                />

                <label htmlFor="department"> 부서명 </label>
                <input
                  class="form-control"
                  id="department"
                  type="text"
                  placeholder="소속된 부서를 입력해주세요"
                  aria-label="your company name"
                />

                <label htmlFor="job-title"> 직함 </label>
                <input
                  class="form-control"
                  id="job-title"
                  type="text"
                  placeholder="직함을 입력해주세요"
                  aria-label="job title"
                />

                <label htmlFor="company-phone"> 회사전화 </label>
                <input
                  class="form-control"
                  id="company-phone"
                  type="tel"
                  placeholder="회사 전화번호를 입력해주세요"
                  aria-label="company phone number"
                />

                <label htmlFor="roadAddrPart1"> 회사주소 </label>
                <div className="zipBox">
                  <input
                    class="form-control"
                    id="roadAddrPart1"
                    type="text"
                    placeholder="주소를 검색하여 회사 주소를 입력하세요"
                    aria-label="company address"
                    value={address}
                  />
                  <button id="zipBtn" type="button" onClick={openPostCode}>
                    주소 검색
                  </button>
                  <div id="popupDom">
                    {isPopupOpen && (
                      <PopupDom>
                        <PopupPostCode
                          onClose={closePostCode}
                          setAddress={setAddress}
                        />
                      </PopupDom>
                    )}
                  </div>
                  <input
                    class="form-control"
                    id="roadAddrPart2"
                    type="text"
                    placeholder="상세주소를 입력하세요"
                    aria-label="company detail address"
                  />
                </div>
              </div>
              <div className="Management-bottomBtn flex-box">
                <Button id="check-btn">확인</Button>
                <Link to="/manage/withdrawal" id="byeBtn">
                  회원탈퇴
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Management;
