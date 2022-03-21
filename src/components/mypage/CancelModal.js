import "./cancelModal.css";
const PopupCancel = ({ open, close }) => {
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <h4 id="notice">수강신청 취소</h4>
            <button className="close times" onClick={close}>
              &times;
            </button>
          </header>
          <footer>
            <p className="cancel-notice">선택한 교육과정이 취소되었습니다</p>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PopupCancel;
