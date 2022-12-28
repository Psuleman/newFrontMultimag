import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useEffect, useState } from "react"
import { useContext } from "react"
import { ListeContext } from "./Context/ListeContext"
import { ListeExportContext } from "./Context/ListeExportContext"
import PopupDelete from './PopupDelete';
import { ListeDejaExporterContext } from './Context/ListeDejaExporterContext';

const DeleteProduit = ({total}) => {
    const {totalSkus, liste, skus, serviceUser} = useContext(ListeContext)
    const {listesProduitExport} = useContext(ListeExportContext)
    const [listSku, setListSku] = useState([])
    const [reload, setReload] = useState()

    //fonction
    useEffect(()=>{
        if(listesProduitExport) {
            let liste = []
            listesProduitExport.forEach(element => {
                if(element.title){
                    liste.push({
                        id: element.id,
                        sku: element.sku_integer
                    })
                }
            })
            setListSku(liste.sort())
        }
    }, [listesProduitExport, total])

    const handleClick = () => {
        /**
         * mettre l'attribut export à 1
         */
    }

    //render
    return (
        <div className="form-check ms-auto">
            <Popup trigger={
                <button type="button" className="btn btn-dark position-relative" onClick={handleClick}>
                    {
                        reload ?
                        <div class="text-center"> Patientez ... 
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </div>

                        :

                        "Retirer de la liste"
                    }
                
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {listSku.length}
                    <span class="visually-hidden"> </span>
                </span>
                </button>
            } position="right center">
                <ListeDejaExporterContext.Provider value={{
                    listSku: listSku, setListSku: setListSku,
                    reload: reload, setReload: setReload
                }}>
                    <div><PopupDelete/></div>
                </ListeDejaExporterContext.Provider>
            </Popup>
            

        </div>
    )
}

export default DeleteProduit;