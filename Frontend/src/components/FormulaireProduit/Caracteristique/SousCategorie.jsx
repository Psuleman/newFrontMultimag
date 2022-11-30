import { useContext, useEffect, useState } from "react"
import { Categories } from "../../../data/Categories"
import { FormulaireContext } from "../Context/FormulaireContext"
import Select from "../TemplateFormulaire/Select"
import { CategorieContext } from "./Context/CategorieContext"

const SousCategorie = () => {
    //variables
    const {infoSku, sousCategorieUpdate, setSousCategorieUpdate, sousCategorieEnUpdate, setSousCategorieEnUpdate, setCategorieUpdate, setCategorieEnUpdate} = useContext(FormulaireContext)
    const {sousCategories, filtres, setFiltres} = useContext(CategorieContext)
    //fonction
    //fonction
    useEffect(()=>{
        if(sousCategorieUpdate ){
            //liste des sous catégorie
            let newSousCategories = 0
            sousCategories.forEach(element => {
                if(element.sous_categorie == sousCategorieUpdate)
                {
                    setSousCategorieEnUpdate(element.sous_categorie_en)
                    setFiltres(element.filtres)
        
                    Categories.forEach(element => {
                        element.sous_categorie.forEach(element_sous_categorie => {
                            if(element_sous_categorie.sous_categorie == sousCategorieUpdate){
                                setCategorieUpdate(element.categorie)
                                setCategorieEnUpdate(element.categorie_en)
                            }
                        });
                    });
                    newSousCategories = 1
                }
            });

            if(newSousCategories == 0){
                let liste = []
                sousCategories.forEach(element => {
                    element.filtres.forEach(element_filtre => {
                        liste.push(element_filtre)
                    })
                })
                setFiltres(liste)
                setSousCategorieEnUpdate("")
            }
        }
    }, [infoSku, sousCategorieUpdate])
    //render
    return ( 
        <Select id="selectSousCategorie" label="Sous categorie" value={sousCategorieUpdate} setValue={setSousCategorieUpdate} list={sousCategories} itemValue="sous_categorie" />
    )
}

export default SousCategorie;