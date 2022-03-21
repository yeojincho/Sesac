import Menu_title from "./Menu_title";
import "./TeacherInfo.css";
import TeacherInfo_detail from "./TeacherInfo_detail";

export default function TeacherInfo() {
  const info = [
    {
      name: "조여진",
      src: "http://www.excacademy.co.kr/images/instructor_img/kang.jpg",
      edu: {
        one: "척척건물 건물주",
        two: "척척건물 건물주",
        three: "척척건물 건물주",
      },
      moto: "잠이 보약이다",
    },
    {
      name: "김세영",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EC%BA%A1%EC%B2%98_1.PNG",
      edu: {
        one: "인재원 회장",
        two: "인재원 회장",
        three: "인재원 회장",
      },
      moto: "노력을 하면 된다",
    },
    {
      name: "박한솔",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EC%BA%A1%EC%B2%98.JPG",
      edu: {
        one: "개발원 대장",
        two: "개발원 대장",
        three: "개발원 대장",
      },
      moto: "밥이 보약이다",
    },
    {
      name: "이승연",
      src: "http://www.excacademy.co.kr/images/instructor_img/%ED%95%9C%EC%A3%BC%EB%AF%B8-%EA%B0%95%EC%82%AC%EC%86%8C%EA%B0%9C.jpg",
      edu: {
        one: "척척대학교 박사",
        two: "척척대학교 박사",
        three: "척척대학교 박사",
      },
      moto: "잘먹고 잘자야한다",
    },
    {
      name: "김미연",
      src: "http://www.excacademy.co.kr/images/instructor_img/kang.jpg",
      edu: {
        one: "박사학원 설립자",
        two: "박사학원 설립자",
        three: "박사학원 설립자",
      },
      moto: "강아지는 귀엽다",
    },
    {
      name: "안예지",
      src: "http://www.excacademy.co.kr/images/instructor_img/kang.jpg",
      edu: {
        one: "똑똑대학교 박사",
        two: "똑똑대학교 박사",
        three: "똑똑대학교 박사",
      },
      moto: "고양이는 귀엽다",
    },
  ];

  const namelist = info.map((data, idx) => (
    <TeacherInfo_detail
      key={idx}
      name={data.name}
      edu={data.edu}
      src={data.src}
      moto={data.moto}
    />
  ));

  return (
    <div className=''>
      <div className='orderPage-bigTlte'>
        <h3 className='orderPage-h3'>
          <b>강사정보</b>
        </h3>
        <span className='orderPage-span'>
          __교육에 필요한 옵션 및 상품정보를 제공합니다.
        </span>
      </div>
      <div className='inner-box '>
        <ul className='teacher-list'>{namelist}</ul>
      </div>
    </div>
  );
}
