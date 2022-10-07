import { Link } from "react-router-dom";
import Template from "../components/Layout/Template"
import Filtre from "../components/ListeProduit/Filtre";
import Table from "../components/ListeProduit/ListeProduit/Table";
import Caracteristique from "../components/FormulaireProduit/Caracteristique";
import Description from "../components/FormulaireProduit/Description";
import Information from "../components/FormulaireProduit/Information";
import Matiere from "../components/FormulaireProduit/Matiere";
import "../assets/scss/formulaireProduit.scss"

const FormulaireProduit = () => {
    return (
        <Template>
            <header>
                <div><Link to="/">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Modification produit</div>
            </header>
            <div className="d-xxl-flex d-xl-flex d-lg-flex d-md-flex mt-4 flex-row flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse justify-content-xxl-between justify-content-xl-start justify-content-lg-start justify-content-md-start "  id="produit">
                <aside className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-0 pe-0">
                    <div className="">
                    <div className="card h-100">
                        <img src="https://fakeimg.pl/300/" className="card-img-center" alt="..." />
                        <div className="card-body"> 
                            <h5 className="card-title">Card title</h5>                           
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>

                        </div>
                    </div>

                </aside>
                <section className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-12 mt-3 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 md-sm-3">
                    {/**
                     * Information produit
                     */}
                    <Information />
                    {/**
                     * Description produit
                     */}
                    <Description />

                    {/**
                     * Caracteristique produit
                     */}
                    <Caracteristique />

                    {/**
                     * Matière produit
                     */}
                    <Matiere />

                </section>
            </div>
        </Template>
    )
}

export default FormulaireProduit;
