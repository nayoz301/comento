import "./App.css";

function Main() {
  return (
    <div id="main">
      <div className="nav_bar">[2021년 10월 6일] 임해성</div>
      <div className="main_page">
        <span className="left_space">
          <div className="login_btn">로그인</div>
        </span>

        <span className="right_space">
          <div className="main_header">
            <span>오름차순</span>
            <span>내림차순</span>
            <button>필터</button>
          </div>

          <div className="post">글</div>
          <div className="ad">광고 </div>
        </span>
      </div>
    </div>
  );
}

export default Main;
