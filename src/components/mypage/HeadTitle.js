import "./headTitle.css";
const HeadTitle = () => {
  const user1 = { name: "강동원", id: "expert", gender: "남" };
  return (
    <>
      <div className="c-top-title menu-titlebox">
        <h2 className="menu-headtitle">마이페이지</h2>
        <h3 className="menu-subtitle">
          __{user1.name}님 엑스퍼트아카데미에 오실걸 환영 합니다.
        </h3>
      </div>
    </>
  );
};

export default HeadTitle;
