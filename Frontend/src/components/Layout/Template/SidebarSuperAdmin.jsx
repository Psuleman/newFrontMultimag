import { Link } from "react-router-dom"

const SidebarSuperAdmin = () => {
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
        <Link className="nav-link" to="/produits/referencement">Référencement</Link>
        <Link className="nav-link" to="/produits/modification">Modification en attente</Link>
        <div className="nav-link">
            Mon compte
            <ul className="submenu">
                <li><Link to="/mon-compte" className="nav-link">Configuration</Link></li>
                <li><Link to="/" className="nav-link">Déconnexion</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default SidebarSuperAdmin