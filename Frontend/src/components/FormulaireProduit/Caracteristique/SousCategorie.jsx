import { useContext, useEffect, useState } from "react"
import { FormulaireContext } from "../Context/FormulaireContext"
import Select from "../TemplateFormulaire/Select"
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
        <Select id="selectSousCategorie" label="Sous categorie" value={sousCategorieUpdate} setValue={setSousCategorieUpdate} list={sousCategories} itemValue="sous_categorie" />


    )
}

export default SousCategorie;