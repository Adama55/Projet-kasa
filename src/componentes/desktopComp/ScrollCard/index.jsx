import React, { useState } from "react"
import IconFleche from '../../../assets/IconFleche.png'

function ScrollCard (tabImages){

    let [afficherImage, changerImage] = useState(0)
    let nombreImages = tabImages.length 

    const imageSuivant = () => {
        changerImage( afficherImage === nombreImages - 1 ? 0 : afficherImage + 1)
    }

    const imagePrecedente = () => {
        changerImage( afficherImage === 0 ? nombreImages - 1 : afficherImage - 1)
    }

    return(
        <div className="scrollCard">
            {
                nombreImages> 1 && <img className="IconFleche IconFleche-gauche" src={IconFleche} alt="Contenu précedént" 
                onClick={imagePrecedente}/>
            }
            {
                tabImages.map((image, index) => {
                    return(
                        <img key={index} className={index === afficherImage ? 'scroll-img actif' : 'scroll-img'} 
                        src={image} alt=" logement"/>
                    )
                })
            }
            {
                nombreImages> 1 && <img className="IconFleche IconFleche-droite" src={IconFleche} alt="Contenu suivant" 
                onClick={imageSuivant}/>
            }
        </div>
    )

}

export default ScrollCard