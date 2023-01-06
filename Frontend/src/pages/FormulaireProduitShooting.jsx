import { useState } from "react"
import { Link } from "react-router-dom"
import Template from "../components/Layout/Template"
import { ShootingContext } from "../components/ShootingPhoto/Context/ShootingContext"
import Formulaire from "../components/ShootingPhoto/Formulaire"
import SaisieSkus from "../components/ShootingPhoto/SaisieSkus"

const FormulaireProduitShooting = () => {
    //variables
    const [nombreSkus, setNombreSkus] = useState()
    const [livreur, setLivreur] = useState()
    const [listSkus, setListSkus] = useState([])
    //fonction



    //render
    return (
        <Template>
            <header>
                <div><Link to="/produits/listes">Liste des produits à shooter > </Link></div>
                <div className="fs-3 fw-bolder">Nouveau produit à shooter et/ou à référencer</div>
            </header>
            <ShootingContext.Provider value={{
                nombreSkus: nombreSkus, setNombreSkus: setNombreSkus,
                livreur: livreur, setLivreur: setLivreur,
                listSkus: listSkus, setListSkus: setListSkus,
            }}>
                <section className="contentInfoProduit  mt-3">
                    <Formulaire />
                    {listSkus.length>0 && <SaisieSkus />}
                </section>                
            </ShootingContext.Provider>

        </Template>
    )
}

export default FormulaireProduitShooting