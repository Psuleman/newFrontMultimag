import { useContext, useEffect, useState } from "react";
import { getUser } from "../../../services/user.service";
import { TemplateContext } from "./Context/TemplateContext";

const Navbar = () => {
    const {showsidebar, setShowsidebar, handleClickLogout, user} = useContext(TemplateContext)
    useEffect(()=>{
        // if(localStorage.getItem("user_multimag")){
		// 	let userStorage = JSON.parse(localStorage.getItem("user_multimag")) 
        //     if(userStorage.email){
        //         let promise = Promise.resolve(getUser(userStorage.email))
		// 		promise.then((value)=>{
		// 			if(value){
        //                 let nom = value[0].prenom + " " + value[0].nom.toUpperCase()
        //                 setUser(nom)
        //                 if(localStorage.getItem("user_multimag")){
        //                     let utilisateur = JSON.parse(localStorage.getItem("user_multimag"))
        //                     utilisateur.service = value[0].service
        //                     utilisateur.nom = value[0].prenom + " " + value[0].nom.toUpperCase()
        //                     localStorage.setItem("user_multimag", JSON.stringify(utilisateur))
                            
        //                 }					
		// 			}
		// 		})
        //     }

        // }
    }, [user])

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
                <div className="navbar-brand text-uppercase fs-4 fw-bold mx-4 ">MULTIMAG</div>                    
            </div>

            <div className="dropdown mx-3">
            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                { user ? user : "Utilisateur"}
            </div>

            <ul style={{cursor:"pointer"}} className="dropdown-menu">
                <li style={{cursor:"pointer"}}><span className="dropdown-item" onClick={handleClickLogout}>Déconnexion</span></li>
            </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;