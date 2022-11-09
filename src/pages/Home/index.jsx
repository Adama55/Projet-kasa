import React from "react"
import { NavLink } from "react-router-dom"
import Banner from "../../componentes/desktopComp/Banner"
import bannerHome from "../../assets/bannerHome.png"
import Logements from '../../assets/dataFromAPI/logements.json'
import Thumb from "../../componentes/desktopComp/Thumb"
import '../../styles/Home.css'

function Home() {
    return (
        <div className="Home">
            <Banner image={bannerHome} texte=" Chez vous partout ailleurs" />

            <div className="card-logements">
                {
                    Logements.map((logement) => 
                    <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                        <Thumb key={logement.id}
                               id={logement.id}
                               image={logement.cover}
                               titre={logement.title}
                                />
                    </NavLink>
                    )

                }
            </div>
        </div>
    )
}

export default Home