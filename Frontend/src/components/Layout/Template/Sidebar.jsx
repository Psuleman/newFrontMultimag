import { useContext } from "react"
import { Link } from "react-router-dom"
import { TemplateContext } from "./Context/TemplateContext"

const Sidebar = () => {
    const {showsidebar} = useContext(TemplateContext)
    //render
    return (
    <div className="collapse sidebar col-xl-2 col-lg-2 col-md-3 col-sm-3 px-4 mt-1" id="navbarToggleExternalContent">
        <nav className="nav flex-column">
            <div className="nav-link">
                Produits
                <ul>
                    <li><Link to="/produits/listes" className="nav-link">liste des produits</Link></li>
                    <li><Link to="/nouveau-produit" className="nav-link">Nouveau produit</Link></li>
                </ul>
            </div>
            <Link className="nav-link" to="/referencement">Référencement</Link>
            <Link className="nav-link" to="/modification">Modification en attente</Link>
            <Link className="nav-link" to="/utilisateur">Gestion des utilisateurs</Link>
            <div className="nav-link">
                Compte
                <ul>
                    <li><Link to="/mon-compte" className="nav-link">Configuration</Link></li>
                    <li><Link href="/" className="nav-link">Déconnexion</Link></li>
                </ul>
            </div>
        </nav>
    </div>            

    )
}

export default Sidebar;