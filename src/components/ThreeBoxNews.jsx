import React from "react";
import ThreeBoxTemplate from "./ThreeBoxTemplate";

function ThreeBoxNews() {
  const boxesData = [
    {
      title: "विभागले आफै किन बनाएन कमलादीमा भासिएको सडक, कहिले बनिसक्छ?",
      author: "विष्णु विश्वकर्मा",
      imageurl:
        "https://img.setoparty.com/uploads/posts/sadak-bhasiyo-(7)-ink-1723180081.jpeg",
    },
    {
      title:
        "पोखरा विमानस्थल निर्माणका लागि लिइएको ऋणलाई अनुदानमा परिणत गर्न चिनियाँ पक्षलाई पत्र",
      author: "सेतोपाटी संवाददाता",
      imageurl:
        "https://img.setoparty.com/uploads/posts/arthamantri-1724332190.jpg",
    },
    {
      title: "सेयर बजारमा कस्ता संकेत देखिँदा के गर्ने निर्णय?",
      author: "विजयराज खनाल",
      imageurl:
        "https://img.setoparty.com/uploads/posts/540X340/share1643969051.jpg",
    },
  ];

  return (
    <div>
      <ThreeBoxTemplate boxes={boxesData} />
    </div>
  );
}

export default ThreeBoxNews;
