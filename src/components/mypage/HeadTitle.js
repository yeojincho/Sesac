import "./headTitle.css";
const HeadTitle = () => {
  const user1 = { name: "강동원", id: "expert", gender: "남" };
  return (
    <>
      <div className="menu-titlebox">
        <h1 className="menu-headtitle">마이페이지</h1>
        <p className="menu-subtitle">
          {user1.name}님 엑스퍼트아카데미에 오실걸 환영 합니다.
        </p>
      </div>
    </>
  );
};

export default HeadTitle;
