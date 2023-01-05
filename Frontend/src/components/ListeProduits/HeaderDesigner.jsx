import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListeContext } from "./Context/ListeContext";
import { ListeExportContext } from "./Context/ListeExportContext";
import DeleteProduit from "./DeleteProduit";
import ExportCsv from "./ExportCsv";
import ToutCocher from "./ToutCocher";

const HeaderDesigner = () => {
    //variable
    const [infoExport, setInfoExport] = useState()
    const [totalSkuExport, setTotalSkuExport] = useState()
    const [role, setRole] = useState()

    const {totalSkus, liste, skus, serviceUser} = useContext(ListeContext)
    const {listesProduitExport} = useContext(ListeExportContext)
    //fonction

    useEffect(()=>{
        if(listesProduitExport){
            let totalskuExport = 0
            listesProduitExport.forEach(element => {
                if(element.title){
                    totalskuExport+=1
                }
            });


            if(totalskuExport>0){
                setInfoExport(totalskuExport + " produits séléctionnées")
            }
            else{
                setInfoExport("0 produit")
            }
            setTotalSkuExport(totalskuExport)
        }

        if(localStorage.getItem("user_multimag")){
            let dataStorage = JSON.parse(localStorage.getItem("user_multimag"))

            setRole(dataStorage.service)
        }
    }, [listesProduitExport])


    const handleClick = () => {
        
    }


    //render
    return (
    <header>
        {
            role && role == "Designer" && 
            <div className="d-flex justify-content-start mt-3 navTable">
                {
                    liste=="listes" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/listes">Tous les produits</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/listes">Tous les produits</Link></div>
                }
                {
                    liste=="non-shooter" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/listes">Produits à shooter</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/listes">Produits à shooter</Link></div>
                }
                {
                    liste=="shooter" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/listes">Produits shooter / Prêt à retourner</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/listes">Produits shooter / Prêt à retourner</Link></div>
                }
                {
                    liste=="historique-shooting" ?
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold bg-white border-bottom-0"><Link className="linkNav" to="/produits/listes">Historique produits (reçu - shooter - référencer -  retourner)</Link></div>
                    :
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 p-4 fw-bold"><Link className="linkNav" to="/produits/listes">Historique produits (reçu - shooter - référencer -  retourner)</Link></div>
                }
            </div>
        }
        {
            totalSkus==0 &&
            <div className="d-flex justify-content-center pt-2 pb-2 action">
                    <h5 className="text-danger">Aucun produit</h5>             
            </div>
        }
        {
            (totalSkus!=0 && !totalSkus) && 
            <div className="d-flex justify-content-center pt-2 pb-2 action">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>                
            </div>

        }
        {
            (listesProduitExport && totalSkus>0 && liste=="export") &&
            <div className="d-flex align-items-center p-2 pb-2 action">
                <ToutCocher />
                <div className="me-3 badge text-bg-light"> {infoExport} </div>
                <DeleteProduit total={totalSkuExport} />

                <ExportCsv  total={totalSkuExport} />
            </div>

        }
        {/* <div className="d-flex justify-content-between pt-2 pb-2 action">
            <div className="p-2">Action {totalSkus}</div>
            {
                (totalSkus!=0 && !totalSkus) && 
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
              </div>
            }
            <div className="p-2">Configuration des actions</div>
        </div> */}
    </header>
    )
}

export default HeaderDesigner;