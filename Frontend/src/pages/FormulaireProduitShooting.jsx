import { Link } from "react-router-dom"
import Template from "../components/Layout/Template"

const FormulaireProduitShooting = () => {
    //render
    return (
        <Template>
            <header>
                <div><Link to="/produits/listes">Liste des produits à shooter > </Link></div>
                <div className="fs-3 fw-bolder">Importer les produits</div>
            </header>
        </Template>
    )
}

export default FormulaireProduitShooting