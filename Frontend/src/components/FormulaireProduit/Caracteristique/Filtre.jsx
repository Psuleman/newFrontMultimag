import { useContext, useEffect, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { CategorieContext } from "./Context/CategorieContext"

const Filtre = () => {
    //variables
    const {infoSku,filtreUpdate, setFiltreUpdate, filtreEnUpdate, setFiltreEnUpdate} = useContext(FormulaireContext)
    const {filtres, setFiltres} = useContext(CategorieContext)

    //fonction
    useEffect(()=>{
        if(filtreUpdate){
            //liste des sous catégorie
            filtres.forEach(element => {
                if(element.filtre == filtreUpdate)
                {
                    setFiltreEnUpdate(element.filtre_en)
                }
            });
        }
    }, [infoSku, filtreUpdate])

    //render
    return (
        <div className="col-md-3">
            <label htmlFor="selectFiltre" className="form-label">Filtre</label>
            <select className="form-select" aria-label="Default select example" id="selectFiltre" value={filtreUpdate} onChange={(e)=>{
                setFiltreUpdate(e.target.value)}}  >
            <option>Choisissez</option>
                {
                    filtres &&
                    filtres.map((item, index)=>(
                        <option value={item.filtre}>{item.filtre}</option>
                    )) 
                }
            </select>
        </div>        
    )


}
export default Filtre;