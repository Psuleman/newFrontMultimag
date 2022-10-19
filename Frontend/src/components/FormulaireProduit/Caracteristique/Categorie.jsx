import { useContext, useEffect, useState } from "react"
import {Categories} from "../../../data/Categories"
import { FormulaireContext } from "../Context/FormulaireContext"
import { CategorieContext } from "./Context/CategorieContext"

const Categorie = () => {
    //variables

    const {infoSku, categorieUpdate, setCategorieUpdate, categorieEnUpdate, setCategorieEnUpdate
    } = useContext(FormulaireContext)

    const {sousCategories, setSousCategories} = useContext(CategorieContext)

    //fonction
    useEffect(()=>{
        if(categorieUpdate){
            //liste des sous catégorie
            Categories.forEach(element => {
                if(element.categorie == categorieUpdate)
                {
                    setCategorieEnUpdate(element.categorie_en)
                    setSousCategories(element.sous_categorie)
                }
            });
        }
    }, [infoSku, categorieUpdate])
    //render
    return (
        <div className="col-md-3">
            <label htmlFor="selectCategorie" className="form-label">Catégorie</label>
            <select className="form-select" aria-label="Default select example" id="selectCategorie" value={categorieUpdate} onChange={(e)=>{setCategorieUpdate(e.target.value)}} >
                <option>Choisissez</option>
                {
                    Categories &&
                    Categories.map((item, index)=>(
                        <option value={item.categorie}>{item.categorie}</option>
                    ))
                }
            </select>
        </div>  
    )
}
export default Categorie;