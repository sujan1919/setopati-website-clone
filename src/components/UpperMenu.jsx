import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function UpperMenu() {
    return (
        <>
        <div className="logo">
            <img src="https://www.setopati.com/themes/setopati/images/logo.svg?v=1.9" alt="" />
        </div>
        <div className="upperMenuContainer">
            <div className="mainUpperMenu">
                <div className="right">
                    <button type="submit" className="subscribe">Subscribe Setopati</button>
                    <div className="login">
                        <div className="login-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                            </svg>
                        </div>
                        <p>LOG IN</p>
                    </div>
                </div>
                <div className="left">
                    <div className="calendar">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p><iframe scrolling="no" border="0" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=267163&font_size=18&bikram_sambat=0&format=dmyw&api=192080o567" width="150px" height="22"></iframe></p>
                    </div>
                    <div className="clock">
                        <FontAwesomeIcon icon={faStopwatch} />
                        <p><iframe scrolling="no" border="0" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" src="https://www.ashesh.com.np/linknepali-time.php?time_only=yes&font_color=267163&aj_time=yes&font_size=18&line_brake=0&bikram_sambat=0&nst=no&api=192086o557" width="150px" height="22"></iframe></p>
                    </div>
                    <div className="unicode">
                        <FontAwesomeIcon icon={faKeyboard} />
                        <p>युनिकोड</p>
                    </div>
                    <div className="english">
                        <div className="roundBtnEnglish">EN</div>
                        <p>English</p>
                    </div>
                    <div className="socialMedia">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default UpperMenu;