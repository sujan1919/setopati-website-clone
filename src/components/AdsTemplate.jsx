import React from "react";

function AdsTemplate({adsUrl}){
    return(
        <>
        <div className="ads-block-80percent">
            <img src={adsUrl} alt="" srcset="" width="80%" />
        </div>
        </>
    )
}
export default AdsTemplate