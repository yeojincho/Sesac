import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import HeadTitle from "./HeadTitle";
import "./Management.css";
import SideMenu from "./SideMenu";
import DaumPostcode from "react-daum-postcode";
import PopupPostCode from "./PopupPostCode";
import PopupDom from "./PopupDom";
import $ from "jquery";

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

  //회원구분 교육담당자는 부가정보2 필수 입력(true)
  const [isRequire, setRequire] = useState(false);

  //교육매니저 옵션 선택시 부가정보2 필수입력 안내
  const ImManager = (value) => {
    if (value === "manager") {
      setRequire(true);
      $("#managerRequired").text(" * 필수입력입니다.").show();
      $("[name=required]").attr("required", true);
    } else if (value === "user") {
      $("#managerRequired").hide();
      setRequire(false);
    }
  };

  // 확인클릭시 필수입력 비어있으면 alert()
  const requiredAlert = () => {
    if (isRequire && $("#company-name").val() === "") {
      $("#required-companyname").show();
      return;
    } else $("#required-companyname").hide();

    if (isRequire && $("#department").val() === "") {
      $("#required-department").show();
      return;
    } else $("#required-department").hide();

    if (isRequire && $("#job-title").val() === "") {
      $("#required-jobtitle").show();
      return;
    } else $("#required-jobtitle").hide();

    if (isRequire && $("#company-phone").val() === "") {
      $("#required-companyphone").show();
      return;
    } else $("#required-companyphone").hide();

    if (isRequire && $("#roadAddrPart1").val() === "") {
      $("#required-roadAddrPart1").show();
      return;
    } else $("#required-roadAddrPart1").hide();
    alert("회원정보가 추가되었습니다.");
  };

  return (
    <div className="Management-wrap1">
      <HeadTitle />
      <div className="inner-box">
        <ul class="cont-navi">
          <li>
            <a href="#none" class="nav-home">
              HOME
            </a>
          </li>
          <li>
            <span class="nav-sub">마이페이지</span>
          </li>
          <li>
            <span class="nav-sub">회원정보 관리</span>
          </li>
        </ul>
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
                    onChange={(e) => ImManager(e.target.value)}
                  >
                    <option selected disabled>
                      회원구분
                    </option>
                    <option value="manager">교육담당자</option>
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

                <h3 className="Management-infoTitle">
                  부가정보2<span id="managerRequired"></span>
                </h3>

                <div className="mrgn-left">
                  <label htmlFor="company-name">
                    회사명
                    <span id="required-companyname" className="requirespan">
                      회사명을 입력하세요
                    </span>
                  </label>
                  <input
                    class="form-control"
                    name="required"
                    id="company-name"
                    type="text"
                    placeholder="소속된 회사를 입력해주세요"
                    aria-label="your company name"
                    required
                  />

                  <label htmlFor="department">
                    부서명
                    <span id="required-department" className="requirespan">
                      부서명을 입력하세요
                    </span>
                  </label>
                  <input
                    class="form-control"
                    name="required"
                    id="department"
                    type="text"
                    placeholder="소속된 부서를 입력해주세요"
                    aria-label="your company name"
                  />

                  <label htmlFor="job-title">
                    직함
                    <span id="required-jobtitle" className="requirespan">
                      직함을 입력하세요
                    </span>
                  </label>
                  <input
                    class="form-control"
                    name="required"
                    id="job-title"
                    type="text"
                    placeholder="직함을 입력해주세요"
                    aria-label="job title"
                  />

                  <label htmlFor="company-phone">
                    회사전화
                    <span id="required-companyphone" className="requirespan">
                      회사전화를 입력하세요
                    </span>
                  </label>
                  <input
                    class="form-control"
                    name="required"
                    id="company-phone"
                    type="tel"
                    placeholder="회사 전화번호를 입력해주세요"
                    aria-label="company phone number"
                  />

                  <label htmlFor="roadAddrPart1">
                    회사주소
                    <span id="required-roadAddrPart1" className="requirespan">
                      회사주소를 입력하세요
                    </span>
                  </label>
                  <div className="zipBox">
                    <input
                      class="form-control"
                      name="required"
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
                      class="form-control required"
                      id="roadAddrPart2"
                      type="text"
                      placeholder="상세주소를 입력하세요"
                      aria-label="company detail address"
                    />
                  </div>
                </div>
                <div className="Management-bottomBtn flex-box">
                  <Button id="check-btn" onClick={requiredAlert}>
                    확인
                  </Button>
                  <Link to="/manage/withdrawal" id="byeBtn">
                    회원탈퇴
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Management;
