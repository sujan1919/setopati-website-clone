import React from "react";
import AdsTemplate from "./AdsTemplate";

function Ads({ id }) {
  const adsData = [
    {
      id: "1",
      adsUrl: "https://www.setopati.com/uploads/bigyaapan/99270700.gif",
    },
    {
      id: "2",
      adsUrl: "https://www.setopati.com/uploads/bigyaapan/53291300.gif",
    },
  ];

  const selectedAd = adsData.find((ad) => parseInt(ad.id) === id);

  return (
    <div className="bigyapaan">
      <AdsTemplate adsDetails={selectedAd} />
    </div>
  );
}
 

export default Ads;
