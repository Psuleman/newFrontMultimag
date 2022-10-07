import { Link } from "react-router-dom";
import Template from "../components/Layout/Template"
import Filtre from "../components/ListeProduit/Filtre";
import Table from "../components/ListeProduit/ListeProduit/Table";

const ListeProduit = () => {
    return (
        <Template>
            <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Produits</div>
                <div  className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit">Ajout produit</Link></div>
            </header>
            <Filtre />
            <Table />
        </Template>
    )
}

export default ListeProduit;
