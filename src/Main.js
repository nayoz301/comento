import "./App.css";
import Post from "./Post";
import Ad from "./Ad";

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
            <span id="sort_option">
              <span id="ascending_order">오름차순</span>
              <span id="descending_order">내림차순</span>
            </span>

            <span className="filter_btn">필터</span>
          </div>

          <Post />
          <Ad />
        </span>
      </div>
    </div>
  );
}

export default Main;
