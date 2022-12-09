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
            <div className="about-me">
                <p>
                    Chloe is currently a 20 year-old Software Developer based in Atlanta, Georgia. She always had a passion for coding ever since the beginning of high school. She took numerous coding classes throughout the years and even became VP of Girls Who Code back in 2019-2020. She continued to pursue coding by majoring in Computer Information Systems at Georgia State University. Only 2 years in, she decided to drop-out and attend Flatiron School for a 3-month coding bootcamp. In December 2022, she was finally able to achieve her dream as a young woman. 
                    <br></br>
                    You can find Chloe by clicking on the logos below: 
                </p>
            </div>
            <div className="media-icons">
            <a href="https://github.com/chloescheffler">
                <img src={logo6} className="icon1" alt="Github" width="40" height="40" />
            </a>
            <a href="https://www.instagram.com/chloescheffler_/">
                <img src={logo7} className="icon1" alt="Instagram" width="45" height="45" />
            </a>
            <a href="https://medium.com/@chloescheffler">
                <img src={logo8} className="icon1" alt="Medium Icon" width="40" height="40" />
            </a>
            <a href="https://www.linkedin.com/in/chloe-scheffler/">
                <img src={logo9} className="icon1" alt="LinkedIn Icon" width="40" height="40" />
            </a>
            </div>
        </div>
    )
}

export default AboutCreator;