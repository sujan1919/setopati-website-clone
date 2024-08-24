import React from "react";

function AdsTemplate({ adsDetails }) {
  return (
    <>
      {adsDetails && (
        <div className="ads-block-80percent">
          <img src={adsDetails.adsUrl} alt="" width="80%" />
        </div>
      )}
    </>
  );
}

export default AdsTemplate;
