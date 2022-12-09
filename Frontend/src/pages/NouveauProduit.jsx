import { Link, useNavigate } from "react-router-dom";
import Template from "../components/Layout/Template";
import "../assets/scss/nouveauProduit.scss"
import { useState, useEffect } from "react";
import Papa from "papaparse"
import Moment from 'moment'
import { setNewProduit } from "../services/produit.service";
import { NouveauProduitContext } from "../components/NouveauProduit/Context/NouveauProduitContext";
import Formulaire from "../components/NouveauProduit/Formulaire";
import TraitementFile from "../components/NouveauProduit/TraitementFile";
import TraitementDone from "../components/NouveauProduit/TraitementDone";

const NouveauProduit = () => {
    //variable
    let navigate = useNavigate()
	// const [file, setFile] = useState()
	const [data, setData] = useState()
	const [patienceImport, setPatienceImport] = useState(false)
	const [finImport, setFinImport] = useState(false)
	const [totaldata, setTotaldata] = useState(0)
	const [totalNewProduct, setTotalNewProduct] = useState(false)
    const [progressBar, setProgressBar] = useState(0)

    //fonction
    useEffect(()=>{
        if(localStorage.getItem('user_multimag')){
            let token =  JSON.parse(localStorage.getItem('user_multimag')).token
            if(!token){
                navigate('/')
            }
            else{
                let user = JSON.parse(localStorage.getItem('user_multimag'))
                if(user.service){
                    let regex = user.service.match(/e-shop/g)
                    let serviceTemp = (user.service && (regex!=null || user.service == "IT" ||  user.service == "Logistique")) ? "admin" : "user"
                    if(serviceTemp == "user"){
                        navigate('/produits/listes')
                    }
                }
                if(!data){
                    setData([])                    
                    setPatienceImport(false)
                    setFinImport(false)
                    setTotaldata(0)
                    setTotalNewProduct(false)
                    setProgressBar(0)
                }
            }            
        }
        else{
            navigate('/')
        }
}, [])

    //render
    return (
        <Template>
            <header>
                <div><Link to="/produits/listes">Liste des produits > </Link></div>
                <div className="fs-3 fw-bolder">Importer les produits</div>
            </header>
            <NouveauProduitContext.Provider value={{
                data: data, setData: setData,
                patienceImport: patienceImport, setPatienceImport: setPatienceImport,
                totaldata: totaldata, setTotaldata: setTotaldata,
                totalNewProduct: totalNewProduct, setTotalNewProduct: setTotalNewProduct,
                progressBar: progressBar, setProgressBar: setProgressBar,
                finImport: finImport, setFinImport: setFinImport,
            }}>

            <section className="contentInfoProduit  mt-3">
                <Formulaire />
                { patienceImport && <TraitementFile /> }
                { finImport &&  <TraitementDone /> }       
            </section>
            </NouveauProduitContext.Provider>

        </Template>
    )
}

export default NouveauProduit;