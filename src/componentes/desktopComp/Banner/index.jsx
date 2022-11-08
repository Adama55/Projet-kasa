import React from "react"
import '../../../styles/Banner.css'

function Banner({image, text}) {
    return(
        <div className="banner">
            <img className="banner-image" src={image} alt="bannière"/>
            <div className="banner-hombre"></div>
            <span className="banner-text">{text}</span>
        </div>
    )
}

export default Banner