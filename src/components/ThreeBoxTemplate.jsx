import React from "react";

function Box({ title, author, imageurl }) {
  return (
    <div className="threeBox-Box">
      <div className="threeBox-image">
        <img src={imageurl} alt="" width="100%" />
      </div>
      <h2 className="threeBox-title">{title}</h2>
      <h4 className="threeBox-author">{author}</h4>
    </div>
  );
}

function ThreeBoxTemplate({ boxes }) {
  return (
    <div className="threeBox-flex">
      {boxes.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          author={box.author}
          imageurl={box.imageurl}
        />
      ))}
    </div>
  );
}

export default ThreeBoxTemplate;
