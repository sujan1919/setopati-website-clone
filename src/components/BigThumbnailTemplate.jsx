import React from "react";
import BigThumbnailNews from "./BigThumbnailNews";
function BigThumbnailTemplate(){
    
        const news =[
            {
                title:"कहाँबाट आएको थियो डायनासोर लोप पार्ने क्षुद्रग्रह?",
                author:"सेतोपाटी",
                authorProfile:"https://img.setoparty.com/uploads/authors/1533539055setopati.jpg",
                imageUrl:"https://www.setopati.com/uploads/posts//Dinosaur-Extinction-1724344880.jpeg",
            },
        ];
    return(
        <>
    <BigThumbnailNews newsData={news} />
        </>
    )
}
export default BigThumbnailTemplate