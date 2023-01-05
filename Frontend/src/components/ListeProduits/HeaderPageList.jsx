import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { TemplateContext } from "../Layout/Template/Context/TemplateContext"

const HeaderPageList = () => {
    const [role, setRole] = useState()
    const {service} = useContext(TemplateContext)

    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                let user = JSON.parse(localStorage.getItem('user_multimag'))
                if(user.service){
                    let regex = user.service.match(/e-shop & référencement/g)
                    let serviceTemp = (user.service && (regex!=null || user.service == "IT")) ? "admin" : "user"
                        setRole(serviceTemp)
                }

            }
        }
    }, [service])


    return (
        <header className="d-flex justify-content-between">
        <div className="fs-3 fw-bolder">Produits</div>
        {
            role == "admin" &&
            <div  className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit">Importer produit.csv</Link></div>
        }
        {
            service == "Designer" && 
            <div className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit-shooter">Nouveau produit reçu / livré</Link></div>
        }
    </header>
    )
}

export default HeaderPageList