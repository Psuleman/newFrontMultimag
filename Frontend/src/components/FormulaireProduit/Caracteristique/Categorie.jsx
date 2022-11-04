import { useContext, useEffect, useState } from "react"
import {Categories} from "../../../data/Categories"
import { FormulaireContext } from "../Context/FormulaireContext"
import Select from "../TemplateFormulaire/Select"
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
            <Select id="selectCategorie" label="Categorie" value={categorieUpdate} setValue={setCategorieUpdate} list={Categories} itemValue="categorie" />
    )
}
export default Categorie;