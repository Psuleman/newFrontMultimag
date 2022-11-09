import { useContext } from "react";
import { TemplateContext } from "./Context/TemplateContext";

const Navbar = () => {
    const {showsidebar, setShowsidebar, handleClickLogout} = useContext(TemplateContext)
    //render
    return (
    <nav className="navbar navbar-light bg-white position-fixed top-0 start-0 end-0">
        <div className="container-fluid" >
            <div className="d-flex flex-row align-self-center">
                <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" onClick={(e)=>{
                    setShowsidebar(!showsidebar)
                    
                    }} id="togglerbutton">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand text-uppercase fs-4 fw-bold mx-4">MULTIMAG</div>                    
            </div>

            <div className="dropdown mx-3">
            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Utilisateur
            </div>

            <ul style={{cursor:"pointer"}} className="dropdown-menu">
                <li style={{cursor:"pointer"}}><a className="dropdown-item" href="#" onClick={handleClickLogout}>Déconnexion</a></li>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;