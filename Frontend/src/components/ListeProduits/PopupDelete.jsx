import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setProduit } from "../../services/produit.service";
import { ListeContext } from "./Context/ListeContext";
import { ListeDejaExporterContext } from "./Context/ListeDejaExporterContext";
import { ListeExportContext } from "./Context/ListeExportContext";

const PopupDelete = () => {
    const {totalSkus, liste, skus, serviceUser} = useContext(ListeContext)
    const {listesProduitExport, setListesProduitExport} = useContext(ListeExportContext)   
    const {listSku, setListSku, reload, setReload} = useContext(ListeDejaExporterContext) 

    const [tabExportEchec, setTabExportEchec] = useState([])
    const [success, setSuccess] = useState()
    const [message, setMessage] = useState()
    let navigate = useNavigate()
    
    useEffect(()=>{

    }, [listesProduitExport])

    const handleClick = () => {
        setReload(true)
        if(listSku){
            var tablength = listSku.length

            listSku.forEach(element => {
                let id = element.id
                let data = {
                    export: true
                }

                //modification
                
                let promise = Promise.resolve(setProduit(element.id, data))

                promise.then((value) => {
                    if(value.ok == false){
                        setTabExportEchec(oldState => {
                            let newState = [...oldState]
                            newState.push(element)

                            return newState
                        })
                    }

                    if(element.id == listSku[listSku.length - 1].id){
                        setTimeout(() => {
                            navigate(0)
                        }, 1000);    
                    }
                })
              

                setListSku(tabExportEchec)
            });

            if(tabExportEchec.length>0 && tabExportEchec.length == tablength){
                setSuccess("echec")
                setMessage("Veuillez réessayer.")
            }
            else if(tabExportEchec.length>0){
                setSuccess("echec et success")
                setMessage(tablength + " produit(s) retiré de la liste. Veuillez réessayer pour les " + tabExportEchec.length + "restant.")
            }
            else{
                setSuccess("success")
                setMessage("Les produits ont été retiré de la liste avec success.")
                
            }
        }

        /**
         * Mettre à jours liste des produits à Exporter
         */




    console.log(tablength, " tab , ", tabExportEchec.length)
    }

    //render
    return (
        <div class="card">
            <h5 class="card-header">Produits déjà exporter?</h5>
            <div class="card-body">
                {
                    (!success || success=="") &&
                    <h5 class="card-title">À retirer de la liste</h5>
                }
            
                <ul>
                {
                    listSku &&
                    listSku.map((i, index)=>(
                        <li className="card-text" key={index + "_liste"}>{i.sku}</li>
                    ))
                    
                }                    
                </ul>
                {
                    success && success !="" &&
                    success == "echec" &&
                    <div class="alert alert-warning" role="alert">
                        {message}
                    </div>
                }
                {
                    success && success !="" &&
                    success == "echec et success" &&
                    <div class="alert alert-danger" role="alert">
                        {message}
                    </div>
                }
                {
                    success && success !="" &&
                    success == "success" &&
                    <div class="alert alert-success" role="alert">
                        {message}
                    </div>
                }
                {
                    (!success || success=="") &&
                    <div class="btn btn-primary" onClick={handleClick}>
                        Retirer
                    </div>
                }
        
                
            </div>
        </div>


    )
}

export default PopupDelete;