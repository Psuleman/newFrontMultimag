import { Link } from "react-router-dom";

const Header = ({page}) => {
    //variable

    //fonction
    //render
    return (
    <header>
        <div className="d-flex justify-content-start mt-3 navTable">
            {
                page=="liste" ?
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/liste-produit">Tous les produits</Link></div>
                :
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/liste-produit">Tous les produits</Link></div>
            }
            {
                page=="referencement" ?
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/referencement">Produit à référencer</Link></div>
                :
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/referencement">Produit à référencer</Link></div>
            }
            {
                page=="modification" ? 
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/modification">Produit à modifier</Link></div>
                :
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/modification">Produit à modifier</Link></div>
            }
            {
                page=="exportation" ? 
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/exportation">Produit à exporter</Link></div>
                :
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/exportation">Produit à exporter</Link></div>
            }

        </div>
        <div className="d-flex justify-content-between pt-2 pb-2 action">
            <div className="p-2">Action</div>
            <div className="p-2">Configuration des actions</div>
        </div>
    </header>
    )
}

export default Header;