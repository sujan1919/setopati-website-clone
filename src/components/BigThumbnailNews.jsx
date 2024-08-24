import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitterSquare,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function BigThumbnailNews({ newsData }) {
  return (
    <>
      <div className="thumbnail-news">
        {newsData.map((data) => (
          <div className="thumbnail-box">
            <div className="thumbnail-image">
              <img src={data.imageUrl} alt="" />
              <div className="thumbnail-info">
                <h3 className="thumbnail-title">{data.title}</h3>
                <div className="flex-thumbnail-meta">
                <div className="thumbnail-left">
                  <div className="thumbnail-author-profile">
                    <img src={data.authorProfile} alt="" />
                  </div>
                  <h3 className="thumbnail-author">{data.author}</h3>
                </div>
                <div className="thumbnail-mid">
                  <div className="comment-box">
                  <FontAwesomeIcon icon={faComment} className="fa-icon"/>0 Comments
                  </div>
                  <div className="thumbnail-share-btn">
                    <FontAwesomeIcon icon={faSquareFacebook} className="fa-icon"/>
                    <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon"/>
                    <FontAwesomeIcon icon={faFacebookMessenger}className="fa-icon" />
                    <div className="share-counter">
                        <h4>1.3k</h4>
                        <h6>Shares</h6>
                    </div>
                    <div className="comment-icon"><FontAwesomeIcon icon={faShareNodes}className="fa-icon-cmnt" /></div>
                  </div>
                </div>
              </div>
            </div></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default BigThumbnailNews;
