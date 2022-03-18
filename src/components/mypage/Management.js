import React from "react";
import { Link } from "react-router-dom";
import { label, FormGroup, Button } from "reactstrap";
import HeadTitle from "./HeadTitle";
import "./Management.css";
import SideMenu from "./SideMenu";

function Management() {
  const user1 = { name: "강동원", id: "expert", gender: "남" };
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
                <label for="phone-number">휴대전화</label>
                <input
                  class="form-control col-sm-4"
                  id="phone-number"
                  type="tel"
                  placeholder="000-0000-0000"
                  aria-label="phone number"
                />

                <label for="mail-address"> 메일주소 </label>
                <input
                  class="form-control"
                  id="mail-address"
                  type="email"
                  placeholder="abc@expert.com"
                  aria-label="email address"
                />

                <label for="birthday"> 생년월일 </label>
                <input
                  class="form-control"
                  id="birthday"
                  type="date"
                  placeholder="0000/00/00"
                  aria-label="birthday"
                />

                <label for="user-division">회원구분</label>

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

                <label for="mailing-service">메일링서비스 : </label>
                <input
                  class="form-check-input"
                  id="mailing-service"
                  type="checkbox"
                  aria-label="check mailing service"
                />

                <label for="mailing-service">수신받음</label>
                <br />
              </div>

              <h3 className="Management-infoTitle">부가정보2</h3>
              <div className="mrgn-left">
                <label for="company-name">회사명</label>
                <input
                  class="form-control"
                  id="company-name"
                  type="text"
                  placeholder="회사명"
                  aria-label="your company name"
                />

                <label for="department"> 부서명 </label>
                <input
                  class="form-control"
                  id="department"
                  type="text"
                  placeholder="부서명"
                  aria-label="your company name"
                />

                <label for="job-title"> 직함 </label>
                <input
                  class="form-control"
                  id="job-title"
                  type="text"
                  placeholder="직함"
                  aria-label="job title"
                />

                <label for="company-phone"> 회사전화 </label>
                <input
                  class="form-control"
                  id="company-phone"
                  type="tel"
                  placeholder="회사전화"
                  aria-label="company phone number"
                />

                <label for="company-address"> 회사주소 </label>
                <input
                  class="form-control"
                  id="company-address"
                  type="text"
                  placeholder="회사주소"
                  aria-label="company address"
                />
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
