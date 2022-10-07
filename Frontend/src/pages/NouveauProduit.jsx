import { Link } from "react-router-dom";
import Template from "../components/Layout/Template";
import "../assets/scss/nouveauProduit.scss"

const NouveauProduit = () => {
    return (
        <Template>
            <header>
                <div><Link to="/">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Importer les produits</div>
            </header>
            <section className="contentInfoProduit  mt-3">
                <div id="newProduit" className="pt-3 px-3 pb-4">
                    <div>Importer le fichier product.csv de multimag</div>
                    <form className="mt-3">
                    <div class="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <label for="formFile" class="form-label">Votre fichier</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>

                    <div><button class="btn btn-outline-dark">Envoyer</button></div>
                    </form>
                </div>
                <div className="pt-3 px-3 pb-4">
                    Traitement des données en cours ... / Télécharger
                </div>
                <div className="pt-3 px-3 pb-4">
                    <div></div>
                </div>          
            </section>

        </Template>
    )
}

export default NouveauProduit;