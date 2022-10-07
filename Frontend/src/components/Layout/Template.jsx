import "../../assets/scss/template.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Template = ({children}) => {
    //variable
    const [showsidebar, setShowsidebar] = useState(false)
    //fonction
    useEffect(()=>{
        setShowsidebar(false)
    }, [])

    //render
    return (
        <section>
        <nav className="navbar navbar-light bg-white position-fixed top-0 start-0 end-0">
            <div className="container-fluid">
                <div className="d-flex flex-row align-self-center">
                    <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" onClick={(e)=>{
                        setShowsidebar(!showsidebar)
                        
                        }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand text-uppercase fs-4 fw-bold mx-4">MULTIMAG</div>                    
                </div>

                <div class="dropdown mx-3">
                <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Utilisateur
                </div>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Déconnexion</a></li>
                </ul>
                </div>
            </div>
        </nav>

        <section className="container_sidebar d-flex flex-row">
            <div className="collapse sidebar col-xl-2 col-lg-2 col-md-3 col-sm-3 px-4 mt-1" id="navbarToggleExternalContent">
                <nav class="nav flex-column">
                    <a class="nav-link" href="#">
                        Produits
                        <ul>
                            <li><Link to="/" className="nav-link">liste des produits</Link></li>
                            <li><Link to="/nouveau-produit" className="nav-link">Nouveau produit</Link></li>
                        </ul>
                    </a>
                    <Link class="nav-link" to="/referencement">Référencement</Link>
                    <Link class="nav-link" to="/modification">Modification en attente</Link>
                    <a class="nav-link" href="#">
                        Compte
                        <ul>
                            <li><Link to="/" className="nav-link">Configuration</Link></li>
                            <li><Link href="/" className="nav-link">Déconnexion</Link></li>
                        </ul>
                    </a>
                </nav>
            </div>            
            {
                showsidebar ? 
                    <div className="ContentProduit col-xl-10 col-lg-10 col-md-9 col-sm-9 mt-1 px-4 pt-3">
                        <section>{children}</section>
                    </div>
                     : 
                    <div className="ContentProduit col-12 mt-1 px-4 pt-3">
                        <section>{children}</section>
                    </div> 
            }
        </section>

        </section>
    )
}

export default Template;