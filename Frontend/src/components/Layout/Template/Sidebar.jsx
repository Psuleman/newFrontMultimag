import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TemplateContext } from "./Context/TemplateContext"
import SidebarAdmin from "./SideBarAdmin"
import SidebarSuperAdmin from "./SidebarSuperAdmin"
import SidebarSuperIdAdmin from "./SidebarSuperIdAdmin"
import SidebarUser from "./SidebarUser"

const Sidebar = () => {
    const {showsidebar, service} = useContext(TemplateContext)
    const [role, setRole] = useState()

    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{

                if(service){
                    if(service && (service == "IT" )){
                        setRole("super IT admin")
                    }
                    else if(service && (service == "e-shop & référencement")){
                        setRole("super admin")
                    }
                    else if(service == "e-shop" || service == "Logistique"){
                        setRole("admin")
                    }
                    else{
                        setRole("user")
                    }                    
                }
               
            }
        }
    }, [service])

    //render
    return (
    <div className="collapse sidebar col-xl-2 col-lg-2 col-md-3 col-sm-3 px-4 mt-1" id="navbarToggleExternalContent">
        {
            role && role == "user" &&
            <SidebarUser />
        }
        {
            role && role == "admin" &&
            <SidebarAdmin />
        }
        {
            role && role == "super admin" &&
            <SidebarSuperAdmin />
        }        
        {
            role && role == "super IT admin" &&
            <SidebarSuperIdAdmin />
        }
    </div>            

    )
}

export default Sidebar;