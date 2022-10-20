import { useContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../../assets/scss/table.scss"
import { ListeContext } from "../Context/ListeContext"
import Header from "../Header"
import Value from "./Value"

const Table = () => {
    //variable
    const navigate = useNavigate()
    const {setCategorieFiltreTab, setUniversFiltreTab, setMarqueFiltreTab, setTagFiltreTab, request, skus, setSkus} = useContext(ListeContext)

    //fonction
    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                //const url = "http://212.129.3.31:8080/api/produits" 
                const url = "http://localhost:8001/api/produits"
                request(url)
            }            
        }

    }, [])
    //render
    return (
        <section>
            <Header page="modification" />
            <div>
                <table>
                    <thead>
                    <tr>
                        <th className="px-2">VARIANT SKU</th>
                        <th className="px-2">SKU</th>
                        <th className="px-2">SAISON</th>
                        <th className="px-2">REÇU LE</th>
                        <th className="px-2">DATE REF</th>
                        <th className="px-2">MARQUE</th>
                        <th className="px-2">UNIVERS</th>
                        <th className="px-2">CATEGORIE</th>
                        <th className="px-2">COULEUR</th>
                        <th className="px-2">PRIX</th>
                        <th className="px-2">PRIX + REMISE</th>
                        <th className="px-2">PICTURES</th>
                        <th className="px-2">ACTION</th>
                    </tr>
                    </thead>
                    {
                        skus && skus.map((item, index)=>(
                            <Value key={index} item={item} />
                        ))
                    }    
                </table>
            </div>
        </section>
    )
}

export default Table;
