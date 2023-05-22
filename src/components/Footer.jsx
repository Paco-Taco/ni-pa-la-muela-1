import React from "react"
import "../styles/Footer.css"
import gb from "../img/github-icon.png"
import ig from "../img/ig-icon.png"
import fb from "../img/facebook-icon.png"
import linkedin from "../img/lk-icon.png"

const Footer = () => {
    return(
        <footer>
            <div className="textFooter">
                <div className="imgLogoFooter"></div>
                <h1>Si vas a comer, come rico.</h1>
                <p>Ni pa' la muela © 2023</p>
            </div>
            <div className="rsFooter">
                <ul>
                    <a href="https://github.com/Paco-Taco/ni-pa-la-muela-1" target="blank"><li><img src={gb} alt="" /></li></a>
                    <a href="https://www.instagram.com/" target="blank"><li><img src={ig} alt="" /></li></a>
                    <a href="https://www.facebook.com/" target="blank"><li><img src={fb} alt="" /></li></a>
                    <a href="https://mx.linkedin.com/" target="blank"><li><img src={linkedin} alt="" /></li></a>
                </ul>

            </div>
        </footer>
    )
}

export default Footer