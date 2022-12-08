import React from "react";
import logo1 from "./Profile-Pic.jpg"
import logo2 from "./flowers.JPG"
import logo3 from "./me.JPG"
import logo4 from "./sky.JPG"
import logo6 from "./github.png"
import logo7 from "./instagram.png"
import logo8 from "./medium.png"
import logo9 from "./linkedin.png"

function AboutCreator() {
    return (
        <div>
            <div className="images">
                <img src={logo1} className="chloe-image" alt="Chloe" width="200" height="270"/>
                <img src={logo2} alt="Flowers" width="200" height="270"/>
                <img src={logo3} alt="Me" width="200" height="270"/>
                <img src={logo4} alt="Sky" width="200" height="270"/>
            </div>
            <div className="media-icons">
            <a href="https://github.com/chloescheffler">
                <img src={logo6} className="icon" alt="Github" width="40" height="40" />
            </a>
            <a href="https://www.instagram.com/chloescheffler_/">
                <img src={logo7} className="icon" alt="Instagram" width="45" height="45" />
            </a>
            <a href="https://medium.com/@chloescheffler">
                <img src={logo8} className="icon" alt="Medium Icon" width="40" height="40" />
            </a>
            <a href="https://www.linkedin.com/in/chloe-scheffler/">
                <img src={logo9} className="icon" alt="LinkedIn Icon" width="40" height="40" />
            </a>
            </div>
        </div>
    )
}

export default AboutCreator;