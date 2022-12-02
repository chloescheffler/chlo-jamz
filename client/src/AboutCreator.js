import React from "react";
import logo1 from "./Profile-Pic.jpg"
import logo2 from "./flowers.JPG"
import logo3 from "./me.JPG"
import logo4 from "./sky.JPG"
import gif1 from "./github.gif"
import gif2 from "./insta.gif"
import gif3 from "./medium.gif"
import gif4 from "./linkedin.gif"

function AboutCreator() {
    return (
        <div> 
            <img src={logo1} alt="Chloe" width="200" height="270"/>
            <img src={logo2} alt="Flowers" width="200" height="270"/>
            <img src={logo3} alt="Sky" width="200" height="270"/>
            <a href="https://github.com/chloescheffler">
                <img src={gif1} className="githubIcon" alt="Github Icon" width="40" height="40" />
            </a>
            <a href="https://www.instagram.com/chloescheffler_/">
                <img src={gif2} className="instagramIcon" alt="Instagram Icon" width="45" height="45" />
            </a>
            <a href="https://medium.com/@chloescheffler">
                <img src={gif3} className="mediumIcon" alt="Medium Icon" width="40" height="40" />
            </a>
            <a href="https://www.linkedin.com/in/chloe-scheffler/">
                <img src={gif4} className="linkedinIcon" alt="LinkedIn Icon" width="40" height="40" />
            </a>
        </div>
    )
}

export default AboutCreator;