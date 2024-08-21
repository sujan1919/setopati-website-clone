import React from "react";

function BoxNews({ title, author, imageurl, description }) {
  return (
    <div className="news-box-main">
      <div className="min-box">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
export default BoxNews