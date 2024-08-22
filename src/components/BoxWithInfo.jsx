import React, { useEffect, useState } from "react";

function BoxWithInfo({ title, author, imageurl, description }) {
  const [truncatedDescription, setTruncatedDescription] = useState(description);

  useEffect(() => {
    const maxWords = 15;
    const words = description.split(' ');

    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(' ');
      setTruncatedDescription(
        <>
          {truncatedText}
          <span style={{ color: "#337ab7" }}> विस्तृतमा</span>
        </>
      );
    } else {
      setTruncatedDescription(description);
    }
  }, [description]);

  return (
    <div className="news-boxwithinfo-main">
      <div className="min-boxwithinfo">
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div className="media-image">
        <img className="" src={imageurl} alt=""  width="80%"/>
        </div>
        <h3 className="description">{truncatedDescription}</h3>
      </div>
    </div>
  );
}

export default BoxWithInfo;
