import { useContext } from "react"
import { FormulaireContext } from "./Context/FormulaireContext"

const Recapitulatif = () => {
    //variable
    const {infoSku, marqueUpdate, paysOrigineUpdate, universUpdate, categorieUpdate, filtreUpdate, couleurUpdate, dimensionFrUpdate, } = useContext(FormulaireContext)
    //render
    return (
        <aside className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-0 pe-0">
            <div className="">
            <div className="card h-100">
                <img src="https://fakeimg.pl/300/" className="card-img-center" alt="..." />
                <div className="card-body"> 
                    <h5 className="card-title">SKU : {infoSku.sku}</h5>                           
                    <p className="card-text"><em>Saison : </em>{infoSku.saison}</p>
                    <p className="card-text"><em>Marque : </em>{marqueUpdate}</p>
                    { paysOrigineUpdate && <p className="card-text"><em>Pays origine : </em>{paysOrigineUpdate}</p> }
                    <p className="card-text"><em>Univers : </em>{universUpdate}</p>
                    { filtreUpdate && <p className="card-text"><em>Catégorie : </em>{categorieUpdate + " > " + filtreUpdate}</p> }
                    { couleurUpdate && <p className="card-text"><em>Couleur : </em>{couleurUpdate}</p> }
                    { dimensionFrUpdate && <p className="card-text"><em>Dimension : </em>{dimensionFrUpdate}</p> }
                    
                </div>

                </div>
            </div>

        </aside>
    )
}
export default Recapitulatif