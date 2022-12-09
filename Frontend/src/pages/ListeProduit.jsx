import { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import Template from "../components/Layout/Template"
import ListeContextProvider from "../components/ListeProduits/Context/ListeContext"
import Filtre from "../components/ListeProduits/Filtre"
import HeaderPageList from "../components/ListeProduits/HeaderPageList"
import Table from "../components/ListeProduits/Table"

const ListeProduit = () => {
    // const [service, setService] = useState()

    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                // let user = JSON.parse(localStorage.getItem('user_multimag'))
                // if(user.service){
                //     let regex = user.service.match(/e-shop/g)
                //     let serviceTemp = (user.service && (regex!=null || user.service == "IT" || user.service=="Logistique" )) ? "admin" : "user"
                //         setService(serviceTemp)
                // }

            }
        }
    }, [])
    //render
    return (
        <Template>
            <HeaderPageList />
            {/* <header className="d-flex justify-content-between">
                <div className="fs-3 fw-bolder">Produits</div>
                {
                    service == "admin" &&
                    <div  className="btn btn-dark"><Link className="linkBtn" to="/nouveau-produit">Importer produit.csv</Link></div>
                }
            </header> */}
            <ListeContextProvider>
                <Filtre/>
                <Table />

            </ListeContextProvider>
        </Template>
    )
}

export default ListeProduit;