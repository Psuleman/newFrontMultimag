import { Link } from "react-router-dom"

const SidebarUser = () => {
    //Render
    return (
    <nav className="nav flex-column">
        <Link to="/produits/listes" className="nav-link">Liste des produits</Link>
        {/* <Link className="nav-link" to="/utilisateur">Gestion des utilisateurs</Link> */}
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

export default SidebarUser