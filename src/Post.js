import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="category_name">category_name</div>
      <div className="post_info">
        <span className="user_id">user_id</span>
        <span className="created_at">created_at</span>
      </div>
      <div>title</div>
      <div>content</div>
    </div>
  );
}

export default Post;
