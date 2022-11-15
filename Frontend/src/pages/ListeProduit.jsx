import { Link, useParams } from "react-router-dom"
import Template from "../components/Layout/Template"
import ListeContextProvider from "../components/ListeProduits/Context/ListeContext"
import Filtre from "../components/ListeProduits/Filtre"
import Table from "../components/ListeProduits/Table"

const ListeProduit = () => {

    //render
    return (
        <Template>
            <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Produits</div>
                <div  className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit">Importer produit.csv</Link></div>
            </header>
            <ListeContextProvider>
                <Filtre/>
                <Table />

            </ListeContextProvider>
        </Template>
    )
}

export default ListeProduit;