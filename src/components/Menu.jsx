import React from "react";
function Menu({menuName , className}){
    return(
        <>
        <li className={className}>{menuName} </li>
        </>
    )
}
export default Menu