import React, { useState } from "react"
import IconFleche from '../../../assets/IconFleche.png'
import '../../../styles/ScrollCard.css'

function ScrollCard ({images}){

    let [afficherImage, changerImage] = useState(0)
    let nombreImages = images.length 

    const imageSuivant = () => {
        changerImage( afficherImage === nombreImages - 1 ? 0 : afficherImage + 1)
    }

    const imagePrecedente = () => {
        changerImage( afficherImage === 0 ? nombreImages - 1 : afficherImage - 1)
    }

    return(
        <div className="scrollCard">
            {
                nombreImages > 1 && <img className="iconFleche iconFleche-gauche" src={IconFleche} alt="Contenu précedént" 
                onClick={imagePrecedente}/>
            }
            {
                images.map((image, index) => {
                    
                    return(
                        <img key={index} className={index === afficherImage ? 'scroll-img actif' : 'scroll-img'} 
                        src={image} alt=" logement"/>
                        
                    )
                })
            }
            {
                nombreImages> 1 && <img className="iconFleche iconFleche-droite" src={IconFleche} alt="Contenu suivant" 
                onClick={imageSuivant}/>
            }
        </div>
    )

}

export default ScrollCard