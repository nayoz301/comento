import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="category">
        <span className="category_name">category_name</span>
        <span className="id">id</span>
      </div>
      <div className="post_info">
        <span className="user_id">user_id</span>
        <span className="created_at">created_at</span>
      </div>
      <div className="title">title</div>
      <div className="content">contents</div>
    </div>
  );
}

export default Post;
