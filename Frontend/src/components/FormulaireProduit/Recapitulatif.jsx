import { useContext } from "react"
import { FormulaireContext } from "./Context/FormulaireContext"

const Recapitulatif = () => {
    //variable
    const {infoSku, marqueUpdate, PaysOrigineUpdate, universUpdate, categorieUpdate, sousCategorieUpdate, filtreUpdate, couleurUpdate} = useContext(FormulaireContext)
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
                    {
                        PaysOrigineUpdate && <p className="card-text"><em>Pays origine : </em>{PaysOrigineUpdate}</p>
                    }
                    <p className="card-text"><em>Univers : </em>{universUpdate}</p>


                </div>

                </div>
            </div>

        </aside>
    )
}
export default Recapitulatif