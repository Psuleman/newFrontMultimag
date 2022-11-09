import "../../assets/scss/template.scss"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Template/Navbar";
import { TemplateContext } from "./Template/Context/TemplateContext";
import Sidebar from "./Template/Sidebar";
const Template = ({children}) => {
    //variable
    const [showsidebar, setShowsidebar] = useState(false)
    const navigate = useNavigate();
    //fonction
    useEffect(()=>{
        setShowsidebar(false)
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
            handleClickLogout: handleClickLogout
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