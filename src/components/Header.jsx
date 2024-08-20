import React from 'react';
import Menu from './Menu';
import '../index.css';

function Header(){
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap" rel="stylesheet"></link>
        <div className="header-main">
        <div className="nav-items">
        <ul>
            <Menu menuName="गृहपृष्ठ" className="active"></Menu>
            <Menu menuName="प्रिमियम स्टोरी" className="premium"></Menu>
            <Menu menuName=" राजनीति " className="passive"></Menu>
            <Menu menuName=" बजार अर्थतन्त्र " className="passive"></Menu>
            <Menu menuName=" विचार " className="passive"></Menu>
            <Menu menuName=" समाज " className="passive"></Menu>
            <Menu menuName=" कला " className="passive"></Menu>
            <Menu menuName=" ब्लग " className="passive"></Menu>
            <Menu menuName="  खेलकुद " className="passive"></Menu>
            <Menu menuName=" ग्लोबल " className="passive"></Menu>
            <Menu menuName=" कभर स्टोरी " className="passive"></Menu>
            <Menu className="passive" menuName={
            <div className="search-icon"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </div>
          }/>
        </ul>
        
        </div>
        </div>
        </>
    )
}

export default Header