import React from "react";
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      props.setAddress(fullAddress); //검색된 주소를 전달
    }
    // console.log(data);
    console.log(fullAddress);
    // console.log(data.zonecode);
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    // width: "600px",
    // height: "600px",
    padding: "2px",
    background: "#333",
  };

  return (
    <div id="zipContainer">
      <DaumPostcode //주소검색팝업창
        style={postCodeStyle}
        onComplete={handlePostCode}
      />
      <button
        type="button"
        onClick={() => {
          props.onClose();
        }}
        className="postCode_btn"
      >
        검색닫기
      </button>
    </div>
  );
};

export default PopupPostCode;
