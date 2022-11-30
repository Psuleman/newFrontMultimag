import { useContext, useEffect, useState } from "react"
import {Categories} from "../../../data/Categories"
import { getAllFiltre } from "../../../services/filtre.service"
import { FormulaireContext } from "../Context/FormulaireContext"
import Select from "../TemplateFormulaire/Select"
import { CategorieContext } from "./Context/CategorieContext"

const Categorie = () => {
    //variables
    const [categories, setCategories] = useState([])
    const {infoSku, categorieUpdate, setCategorieUpdate, categorieEnUpdate, sousCategorieUpdate, setCategorieEnUpdate
    } = useContext(FormulaireContext)

    const {sousCategories, setSousCategories} = useContext(CategorieContext)

    //fonction
    useEffect(()=>{
        if(categorieUpdate){
            if(categorieUpdate == "A définir" && sousCategorieUpdate!="A définir"){
                Categories.forEach(element => {
                    element.sous_categorie.forEach(element_sous_categorie => {
                        if(element_sous_categorie.sous_categorie == sousCategorieUpdate){
                            setCategorieUpdate(element.categorie)
                            setCategorieEnUpdate(element.categorie_en)
                        }
                    });
                });
            }
            //liste des sous catégorie
            let newCategorie = 0 
            Categories.forEach(element => {
                if(element.categorie == categorieUpdate)
                {
                    setCategorieEnUpdate(element.categorie_en)
                    setSousCategories(element.sous_categorie)
                    newCategorie = 1
                }
            });
            if(newCategorie == 0){
                let liste = []
                Categories.forEach(element => {
                    element.sous_categorie.forEach(element_sous_categorie => {
                        liste.push(element_sous_categorie)
                    })
                })
                console.log(liste)
                setSousCategories(liste)
                setCategorieEnUpdate("")

            }
        }
    }, [infoSku, categorieUpdate])
    //render
    return (
            <Select id="selectCategorie" label="Categorie" value={categorieUpdate} setValue={setCategorieUpdate} list={Categories} itemValue="categorie" />
    )
}
export default Categorie;