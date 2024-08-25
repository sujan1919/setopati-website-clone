import React from "react";
import SectionTitleTemplate from"./SectionTitleTemplate";
function SectionTitle({id}){
    const TagNames=[
        {
            id:"1",
            name:"निःशुल्क प्रिमियम स्टोरी",
        },
    ];
    const selectedTitle = TagNames.find((title) => parseInt(title.id) === id);

    return (
      <div className="section-title-block">
        <SectionTitleTemplate sectionTitle={selectedTitle} />
      </div>
    );
}
export default SectionTitle