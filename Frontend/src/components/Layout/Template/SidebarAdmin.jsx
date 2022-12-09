import { Link } from "react-router-dom"

const SidebarAdmin = () => {
    //Render
    return (
    <nav className="nav flex-column">
        <div className="nav-link">
            Produits
            <ul className="submenu">
                <li><Link to="/produits/listes" className="nav-link">Liste des produits</Link></li>
                <li><Link to="/nouveau-produit" className="nav-link">Nouveau produit</Link></li>
            </ul>
        </div>
        <Link className="nav-link" to="/gestion/utilisateur">Gestion des utilisateurs</Link>
        <div className="nav-link">
            Compte
            <ul className="submenu">
                <li><Link to="/mon-compte" className="nav-link">Configuration</Link></li>
                <li><Link to="/" className="nav-link">Déconnexion</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default SidebarAdmin