import React from "react"
import {useParams, Navigate} from 'react-router-dom'
import Logements from '../../assets/dataFromAPI/logements.json'
import ScrollCard from '../../componentes/desktopComp/ScrollCard'
import Tag from '../../componentes/desktopComp/Tag'
import Dropdown from "../../componentes/desktopComp/Dropdown"
import EtoileVide from '../../assets/EtoileVide.png'
import EtoileCoche from '../../assets/EtoileCoche.png'
import '../../styles/LogementsCard.css'


function LogementsCard () {
    // recuperation de la fiche
    const id = useParams()
    const ficheLogement = Logements.find(logt => logt.id === id.id)

    // patie tag dans un tableu
    
    const logementTags = ficheLogement?.tags.map((tags, index) => {
        return<Tag  key={index} nom={tags}/>
    })

    // avis_note
    let avisLogement = []
    let flagAvis = true

    for (let i=0; i<5; i++) {
        // rating, ce qui contient le nombre d'etoike dans le fichier json
        if (i === parseInt(ficheLogement?.rating)) {
            flagAvis = false;
        }
        if (flagAvis === true ) {
            avisLogement.push(<img key={i} className="lesEtoiles" src={EtoileCoche} alt={`${ficheLogement?.rating}/5`}/>)
        }
        else {
            avisLogement.push(<img key={i} className="lesEtoiles" src={EtoileVide} alt={`${ficheLogement?.rating}/5`}/>)
        }
    }

    // partie Equipement

    const equipementLogement = ficheLogement?.equipments.map((equipement, index) => {
        return < li key={index}> {equipement}</li>
    })

    
    return (
        <>
            {
                ficheLogement ? (
                    <div className="fiche">
                        <ScrollCard images={ficheLogement?.pictures}/>
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{ficheLogement?.title}</span>
                                <span className="endroit-logement">{ficheLogement?.location}</span>
                                <div className="tags">
                                    {logementTags}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {avisLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement?.description}/>
                            <Dropdown titre="Équipements" description={equipementLogement}/>
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}


export default LogementsCard