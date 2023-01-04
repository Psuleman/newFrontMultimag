import "../../assets/scss/template.scss"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Template/Navbar";
import { TemplateContext } from "./Template/Context/TemplateContext";
import Sidebar from "./Template/Sidebar";
import { getUser } from "../../services/user.service";
const Template = ({children}) => {
    //variable
    const [showsidebar, setShowsidebar] = useState(false)
    const [service, setService] = useState()
    const [user, setUser] = useState()
    const [emailUser, setEmailUser] = useState()
    const navigate = useNavigate();
    //fonction
    useEffect(()=>{
        setShowsidebar(false)
        let userStorage = JSON.parse(localStorage.getItem("user_multimag"))
        if(userStorage && userStorage.email){

            let promise = Promise.resolve(getUser(userStorage.email))
            promise.then((value)=>{
                if(value){
                    let nom = value[0].prenom + " " + value[0].nom.toUpperCase()
                    if(localStorage.getItem("user_multimag")){
                        let utilisateur = JSON.parse(localStorage.getItem("user_multimag"))
                        utilisateur.service = value[0].service
                        utilisateur.nom = value[0].prenom + " " + value[0].nom.toUpperCase()
                        utilisateur.email = value[0].email
                        localStorage.setItem("user_multimag", JSON.stringify(utilisateur))
                        
                        setUser(utilisateur.nom)
                        setEmailUser(utilisateur.email)
                        setService(utilisateur.service)


                    }					
                }
            })
        }
        else{
            navigate(`/`)
        }

    }, [])



    const handleClickLogout = () => {
        localStorage.removeItem("user_multimag")
        navigate("/")
    }
    //render
    return (
        <section>
        <TemplateContext.Provider value={{
            showsidebar: showsidebar, setShowsidebar: setShowsidebar,
            handleClickLogout: handleClickLogout,
            service: service,
            user: user,
            emailUser: emailUser,
        }}>
            <Navbar />

            <section className="container_sidebar d-flex flex-row">
                <Sidebar />           
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
        </TemplateContext.Provider>
        </section>
    )
}

export default Template;