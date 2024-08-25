import React from "react";

function SectionTitleTemplate({sectionTitle}){
    return (
        <>
          {sectionTitle && (
            <div className="section-title">
                <h2>{sectionTitle.name}</h2>
            </div>
          )}
        </>
      );
}
export default SectionTitleTemplate