import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListeContext } from "./Context/ListeContext";
import { ListeExportContext } from "./Context/ListeExportContext";
import ExportCsv from "./ExportCsv";

const Header = () => {
    //variable
    const {totalSkus, liste, skus, serviceUser} = useContext(ListeContext)
    const {listesProduitExport} = useContext(ListeExportContext)
    //fonction
    const handleClick = () => {
        
    }

    //render
    return (
    <header>
        {
            serviceUser == "admin" && 
            <div className="d-flex justify-content-start mt-3 navTable">
                {
                    liste=="listes" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/listes">Tous les produits</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/listes">Tous les produits</Link></div>
                }
                {
                    liste=="referencement" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/referencement">Produit à référencer</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/referencement">Produit à référencer</Link></div>
                }
                {
                    liste=="modification" ? 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/modification">Produit à modifier</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/modification">Produit à modifier</Link></div>
                }
                {
                    liste=="export" ? 
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/export">Produit à exporter</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/export">Produit à exporter</Link></div>
                }

            </div>
        }

        {
            (totalSkus!=0 && !totalSkus) && 
            <div className="d-flex justify-content-center pt-2 pb-2 action">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>                
            </div>

        }
        {
            (listesProduitExport && totalSkus>0 && liste=="export") &&
            <div className="d-flex justify-content-between pt-2 pb-2 action">
                <ExportCsv />
            </div>

        }
        {/* <div className="d-flex justify-content-between pt-2 pb-2 action">
            <div className="p-2">Action {totalSkus}</div>
            {
                (totalSkus!=0 && !totalSkus) && 
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
              </div>
            }
            <div className="p-2">Configuration des actions</div>
        </div> */}
    </header>
    )
}

export default Header;