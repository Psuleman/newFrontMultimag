import { useContext, useEffect, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import { CategorieContext } from "./Context/CategorieContext"

const SousCategorie = () => {
    //variables
    const {infoSku, sousCategorieUpdate, setSousCategorieUpdate, sousCategorieEnUpdate, setSousCategorieEnUpdate} = useContext(FormulaireContext)
    const {sousCategories, filtres, setFiltres} = useContext(CategorieContext)
    //fonction
    //fonction
    useEffect(()=>{
        if(sousCategorieUpdate){
            //liste des sous catégorie
            sousCategories.forEach(element => {
                if(element.sous_categorie == sousCategorieUpdate)
                {
                    setSousCategorieEnUpdate(element.sous_categorie_en)
                    setFiltres(element.filtres)
                    console.log("filtre sous ", filtres)
                }
            });
        }
    }, [infoSku, sousCategorieUpdate])
    //render
    return (                
    <div className="col-md-3">
        <label htmlFor="selectSousCategorie" className="form-label">Sous catégorie</label>
        <select className="form-select" aria-label="Default select example" id="selectSousCategorie" value={sousCategorieUpdate} onChange={(e)=>{setSousCategorieUpdate(e.target.value)}} >
            <option>Choisissez</option>
            {
                sousCategories &&
                sousCategories.map((item, index)=>(
                    <option value={item.sous_categorie}>{item.sous_categorie}</option>
                )) 
            }
        </select>
    </div>

    )
}

export default SousCategorie;