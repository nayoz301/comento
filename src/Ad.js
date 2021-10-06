import "./Ad.css";

function Ad() {
  return (
    <div className="ad">
      <div className="sponsored">sponsored</div>
      <div className="content">
        <span className="image">image</span>
        <span className="writing">
          <div className="title">Title</div>
          <div className="desc">contents</div>
        </span>
      </div>
    </div>
  );
}

export default Ad;
