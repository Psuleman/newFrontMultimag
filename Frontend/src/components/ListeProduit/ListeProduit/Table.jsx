import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../../assets/scss/table.scss"
import Header from "../Header"
import Value from "./Value"

const Table = () => {
    //variable
    const [skus, setSkus] = useState([])
    const navigate = useNavigate()

    //fonction


    useEffect(() => {
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                request()
            }            
        }

    }, [])

    const request = () => {
        if(localStorage.getItem('user_multimag')){
            let token = JSON.parse(localStorage.getItem('user_multimag')).token
            //const url = "http://212.129.3.31:8080/api/produits" 
            const url = "http://localhost:8001/api/produits" 
            const header = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    //Authorization : `Bearer ${token}` 			
                },
                cache: "default",
            }

            fetch(url, header)
            .then(function(res) {
                //console.log(res.json())
                return res.json();
            })
            .then(function(value) {
                console.log(value)
                if(value.length > 0){
                    setSkus(value)
                }
                else{
                    console.log("ko")
                }
            })
            .catch(function(err) {
                //(err)
            })   
        }

        else{
            navigate('/')
        }
    }
    

    if(skus){
        console.log(skus)
    }


    //render
    return (
        <section>
            <Header page="liste" />
            <div>
                <table>
                    <thead>
                    <tr>
                        <th className="px-2" colSpan="2">SKU</th>
                        <th className="px-2">SAISON</th>
                        <th className="px-2">REÇU LE</th>
                        <th className="px-2">DATE REF</th>
                        <th className="px-2">MARQUE</th>
                        <th className="px-2">UNIVERS</th>
                        <th className="px-2">CATEGORIE</th>
                        <th className="px-2">SOUS CATEGORIE</th>
                        <th className="px-2">COULEUR</th>
                        <th className="px-2">PRIX</th>
                        <th className="px-2">REMISE</th>
                        <th className="px-2">PICTURES</th>
                        <th className="px-2">TAILLE</th>
                        <th className="px-2">STOCK BOISSY</th>
                        <th className="px-2">STOCK SEVIGNE</th>
                        <th className="px-2">STOCK HEROLD</th>
                        <th className="px-2">STOCK DEPOT</th>
                        <th className="px-2">STOCK REFERENCE</th>
                        <th className="px-2">STOCK TOTAL</th>
                        
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
