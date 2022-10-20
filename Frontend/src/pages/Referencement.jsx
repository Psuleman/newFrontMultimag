import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Template from "../components/Layout/Template"
import ListeContextProvider from "../components/ListeProduit/Context/ListeContext";
import Filtre from "../components/ListeProduit/Filtre";
import Table from "../components/ListeProduit/Referencement/Table";

const Referencement = () => {
    //Variable
    let navigate = useNavigate()

    //fonction
    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                localStorage.setItem('page', 'referencement')
            }            
        }
        else{
            navigate('/')
        }

    }, [])

    //render
    return (
        <Template>
            <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Produits</div>
                <div  className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit">Ajout produit</Link></div>
            </header>
            <ListeContextProvider>
                <Filtre />
                <Table />                
            </ListeContextProvider>
        </Template>
    )
}

export default Referencement;
