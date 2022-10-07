import "../../assets/scss/template.scss"
import { useEffect, useState } from "react";
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
                <div className=" mx-3">UTILISATEUR</div>
            </div>
        </nav>

        <section className="container_sidebar d-flex flex-row">
            <div className="collapse sidebar col-xl-2 col-lg-2 col-md-3 col-sm-3 px-4 mt-1" id="navbarToggleExternalContent">
                <nav class="nav flex-column">
                    <a class="nav-link" href="#">
                        Produits
                        <ul>
                            <li><a href="#" className="nav-link">liste des produits</a></li>
                            <li><a href="#" className="nav-link">Nouveau produit</a></li>
                        </ul>
                    </a>
                    <a class="nav-link" href="#">Référencement</a>
                    <a class="nav-link" href="#">Modification en attente</a>
                    <a class="nav-link" href="#">
                        Compte
                        <ul>
                            <li><a href="#" className="nav-link">Configuration</a></li>
                            <li><a href="#" className="nav-link">Déconnexion</a></li>
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