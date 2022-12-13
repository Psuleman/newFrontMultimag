import { useContext } from "react"
import { useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { TailleContext } from "./Context/TailleContext"

 


const AddVariant = () => {
    const {attributUpdate, setAttributUpdate, infoSku} = useContext(FormulaireContext)
    const {nbVariant, setNbVariant} = useContext(TailleContext)

    const handleClickAddVariant = () => {
        let tailleTemp = [...attributUpdate]
        for(let item = 0; item<nbVariant; item++) {
            tailleTemp.push({
                taille_fnr: "",
                taille_ref: {taille_ref: ""},
                variant_sku: infoSku.sku + "_"
            })
            setAttributUpdate(tailleTemp)
        }


        setNbVariant(0)
    }

    
    // render
    return (
        <section className="row g-3 mt-3">
        <div className="col-md-3">
            <label htmlFor="inputAddVariant" className="form-label">Nombre de taille supplementaire</label>
            <input type="number" value={nbVariant} min="0" className="form-control" id="inputAddVariant" onChange={(e)=>{
                if(parseInt(e.target.value) > 0){ setNbVariant(parseInt(e.target.value))}
            }} />
        </div> 
        <div className="col-md-3">
            <label htmlFor="btnAddMatiere" className="form-label text-white">Bouton</label>
            <input type="button" className="form-control" id="btnAddMatiere" value="ajouter" onClick={handleClickAddVariant} />
        </div> 
        </section> 
    )
}

export default AddVariant